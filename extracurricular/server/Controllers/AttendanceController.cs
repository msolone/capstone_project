using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Extracurricular;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class AttendanceController : ControllerBase {
        private Extracurricular_DatabaseContext db { get; set; }

        public AttendanceController () {
            this.db = new Extracurricular_DatabaseContext ();
        }

        // api/attendance

        // Pulls all data from the Attendance Table
        [HttpGet]
        public ActionResult<IEnumerable<Attendance>> Get () 
        {
            return this.db.Attendance;
        }

        // Pulls all Attendance Data on a specific player
        [HttpGet("{id}")]
        public IEnumerable<Attendance> GetPlayerAttendance(int id)
        {
            var playerAttendance = this.db.Attendance.Where(w => w.PlayerId == id);
            return playerAttendance;
        }

        // Post data to the Attendance Table
        [HttpPost]
        public Attendance Post([FromBody] Attendance status)
        {
        
            this.db.Attendance.Add(status);
            this.db.SaveChanges();
            // //var rv = this.db.Players.Include(i => i.Team).FirstOrDefault(p => p.Id == PlayerName.Id);
            // this.db.Entry(PlayerName).Reference(p => p.Team).Load();
            return status;
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var deletedPlayer = this.db.Attendance.FirstOrDefault(w => w.Id == id);
            this.db.Attendance.Remove(deletedPlayer);
            this.db.SaveChanges();
            return Ok(new { success = true }); 
        }
    }
}
    