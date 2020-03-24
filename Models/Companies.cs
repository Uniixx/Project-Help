using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_help.Models
{
    public class Companies
    {
        public string name { get; set; }
        public string Address { get; set; }
        public virtual ICollection<ApplicationUser> Members { get; set; }
        public string Country { get; set; }

    }
}
