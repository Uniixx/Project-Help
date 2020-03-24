using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_help.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int AccountType { get; set; }
        public string CountryCode { get; set; }
        public int Age { get; set; }
        public bool IsStaff { get; set; }
        public int StaffLevel { get; set; }
        public bool IsAccountSuspended { get; set; }
    }
}
