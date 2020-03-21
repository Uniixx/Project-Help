using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_help.Models
{
    public class UserModel
    {
        public virtual ICollection<CompaniesModel> Companies { get; set; }
        public string UserBio { get; set; }
    }
}
