using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_help.Models
{
    public class User
    {
        public virtual ICollection<Company> Companies { get; set; }
        public string UserBio { get; set; }
        public string UserAvatar { get; set; }
    }
}
