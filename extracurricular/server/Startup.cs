﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace server {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
            new Extracurricular_DatabaseContext().Database.Migrate();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {

            var conn = Environment.GetEnvironmentVariable ("CONNECTION_STRING") ?? "server=localhost;database=Extracurricular_Database";

            services
                .AddEntityFrameworkNpgsql()
                .AddDbContext<Extracurricular_DatabaseContext>(opt =>
                    opt.UseNpgsql(conn));

                    
            services.AddMvc ().AddJsonOptions (options => {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver ();
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            services.AddCors ();
            services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            } else {
                app.UseHsts ();
            }

            app.UseHttpsRedirection ();
            app.UseCors (builder =>
                builder
                .AllowAnyOrigin ()
                .AllowAnyMethod ()
                .AllowAnyHeader ()
                .AllowCredentials ());
            app.UseMvc ();
        }
    }
}