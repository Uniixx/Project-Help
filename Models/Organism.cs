using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_help.Models
{
    public class Organisms
    {
        public Guid Id { get; set; }
        public string ShortName { get; set; } // example for coronavirus this would be equal to "COVID-19"
        public string OrganismFullName { get; set; }
        public string OrganismInformation { get; set; }
    }
}
