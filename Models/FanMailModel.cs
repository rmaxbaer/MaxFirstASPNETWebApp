using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MaxFirstASPNETWebApp.Models
{
    public class FanMailModel
    {


        [Range(0, 100, ErrorMessage = "Assignment field must be a positive number between 0-100")]
        public int assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Projects field must be a positive number between 0-100")]
        public int projects { get; set; }
        [Range(0, 100, ErrorMessage = "Quizzes field must be a positive number between 0-100")]
        public int quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Exams field must be a positive number between 0-100")]
        public int exams { get; set; }
        [Range(0, 100, ErrorMessage = "INTEX field must be a positive number between 0-100")]
        public int intex { get; set; }


        
            
            
    }
}
