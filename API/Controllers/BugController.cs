﻿using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace API.Controllers
{
    public class BugController : BaseApiController
    {
        private readonly DataContext _context;

        public BugController(DataContext context)
        {
            _context = context;
        }


        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> getSecrets(){

            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> getNotFound()
        {

            var thing = _context.Users.Find(-1);

            if (thing == null)
            {
                return NotFound();

            }
            else
            {
                return thing;
            }
        }

        [HttpGet("server-error")]
        public ActionResult<string> getServerError()
        {

            var thing = _context.Users.Find(-1);

            var thingToReturn = thing.ToString();

            return thingToReturn;
        }

        [HttpGet("bad-request")]
        public ActionResult<string> getBadRequest()
        {

            return BadRequest("This was a bad request");
        }


    }
}
