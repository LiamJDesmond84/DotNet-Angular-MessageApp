using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
        {
            if(await UserExists(registerDto.Username))
            {
                return BadRequest("Username Is Taken");
            }

            using var hmac = new HMACSHA512();
            var user = new AppUser
            {

                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        public async Task<ActionResult<AppUser>> Login(LoginDto loginDto)
        {
            // Find - good for when you know the Primary Key
            // FirstOrDefault - Get something back or NULL(default value for an object)
            // First - Get sometihng back or ERROR
            //var user = await _context.Users.FirstOrDefaultAsync(loginDto.Username); - if there's more than 1 element in the DB that matches our query - Throws exception?
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);

            // Checking if User Exists
            if(user == null)
            {
                return Unauthorized("Invalid Username");
            }


            // Checking if hashed passwords match(byte[])
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for(int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                {
                    return Unauthorized("Invalid Password");
                }
            }

            return user;

        }

        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

    }
}
