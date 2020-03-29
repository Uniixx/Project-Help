using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_help.Models
{
    public class Enterprises
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public virtual ICollection<ApplicationUser> Members { get; set; }
        public string Country { get; set; }
        public string EnterpriseLogo { get; set; }

        // Extra Information for Enterprises

        public bool IsApartOfACompany { get; set; }
        public string[] Companies { get; set; }
    }
}
