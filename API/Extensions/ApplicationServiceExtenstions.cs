using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtenstions
    {

        //public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        //{
        //    builder.Services.AddDbContext<DataContext>(options =>
        //    {
        //        options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
        //    });

        //    builder.Services.AddCors();

        //    builder.Services.AddScoped<ITokenService, TokenService>();
        //}


            public static void AddApplicationServices(this IServiceCollection services, IConfiguration config)
            {
                services.AddDbContext<DataContext>(options =>
                {
                    options.UseSqlite(config.GetConnectionString("DefaultConnection"));
                });

                services.AddCors();

                services.AddScoped<ITokenService, TokenService>();
            }
        }
    }
}
