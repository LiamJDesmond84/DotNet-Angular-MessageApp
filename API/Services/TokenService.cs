using API.Entities;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace API.Services
{
    public class TokenService : ITokenService
    {

        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }
        public string CreateToken(AppUser user)
        {
            throw new NotImplementedException();
        }
    }
}
