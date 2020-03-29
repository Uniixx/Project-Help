using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_help.Models
{
    public class Report
    {
        public User ReportedUser { get; set; }
        public string Reporter { get; set; }
        public string ReasonForReport { get; set; }
        public DateTime TimeOfReport { get; set; }
        public bool IsAssigned { get; set; }
        public string Assignee { get; set; }
        public bool IsComplete { get; set; }
        public int Status { get; set; } // example 1 = open 2 = being reviewed -1 = closed and set the bool to true.
        public byte Video { get; set; } // dunno wether it should be byte or string to a video from like youtube or smth
    }
}
