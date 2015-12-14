/////Resume Sections//////
////This resume has four distinct sections: work, education, projects and a header with biographical information//////
var bio = {
    "name": "Celio Da Costa",
    "role": "Front-End Developer",
    "welcomeMessage": "<b>Even if you're on the right track, you'll get run over if you just sit there." + " (Will Rogers)",
    "skills": ["JavaScript", "Web Development", "Photoshop", "Video Editing", "Network Security", "SEO", "Security+", "Leadership", "Project Managemant"],
    "contacts": {
        "phone": "+1 954 275 3161",
        "email": "ccosta1@wgu.edu",
        "githubName": "celiocosta",
        "twitter": "@wearetechtv",
        'skype': "celiocosta2012",
        "location": "Coral Springs, Florida"
    },
    "photo": "images/celio2.jpg"
};

bio.display = function () {

    function displayRole() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
    }

    displayRole();

    function displayName() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

    }

    displayName();

    function displayPhoto() {
        var formattedPhoto = HTMLbioPic.replace("%data%", bio.photo);
        $("#header").append(formattedPhoto);
        console.log(formattedPhoto);
    }

    displayPhoto();

    function displayWelcomeMessage() {
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);
    }

    displayWelcomeMessage();


//USING .sort() funcion//////USING .sort() funcion////////USING .sort() funcion///////
    function displaySkills() {
      bio.skills.sort();
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
          for (var i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

            }
        }
    }

    displaySkills();

    function displayTopContacts() {

        var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githubName);
        var formattedSkype = HTMLskype.replace('%data%', bio.contacts.skype);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts").append(formattedPhone);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $('#topContacts').append(formattedSkype);
        $("#topContacts").append(formattedLocation);

        $("#footerContacts").append(formattedPhone);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);
    }

    displayTopContacts();
};
bio.display();

var work = {
    "jobs": [
        {
            "employer": "Campa Services Inc.",
            "title": "Owner",
            "location": "Coral Springs, Florida",
            "datesWorked": "November 2014 - now",
            "description": "After the company I was working before has closed its activities," +
            " and having aquired the necessary knowledge from my previous job I started my own business of exporting software to Brazil. " +
            "I went from $0 to over $500k of software sales in a period of 1 year just working by myself. " +
            "I have partnered with companies like: Xamarin, Enfocus, Minitab, <br> Corel, ThinkCell, Unity, Pixologic, to represent and resell their product in Brazil and Colombia."
        },
        {
            "employer": "Adx Miami Software",
            "title": "IT Manager",
            "location": "Margate, Florida",
            "datesWorked": "April 2012 - February 2014",
            "description": "Responsible for connecting software developers and final clients. In charge of logistic, and technical support"
        }
    ]


};

work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
        var formattedDatesWorked = HTMLworkDates.replace("%data%", job.datesWorked);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);


        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDatesWorked);
        $(".work-entry:last").append(formattedDescription);
        $(".work-entry:last").append(formattedLocation);


    });
};
work.display();

/////USING funcion map() /////////
var priorjobs = [
  {place: "Lone Venture Corp.", position: "Manager", year: 2011},
  {place: "Pirelli Tires", position: "Assistent Manager", year: 2009},
  {place: "Setesb", position: "Intern", year: 2007},

];

var jobsBefore = priorjobs.map(function(works){
  return works.place + " ==> " + "  Position: " + works.position + ", Year: " + works.year;


//$("#workExperience2").append(HTMLworkStart);


});
var formattedEmployer2 = HTMLworkEmployer2.replace("%data%", jobsBefore[0]);
$("#workExperience2").append(formattedEmployer2);

var formattedEmployer3 = HTMLworkEmployer2.replace("%data%", jobsBefore[1]);
$("#workExperience2").append(formattedEmployer3);

var formattedEmployer4 = HTMLworkEmployer2.replace("%data%", jobsBefore[2]);
$("#workExperience2").append(formattedEmployer4);

//var formattedTitle = HTMLworkTitle.replace("%data%", job.title);


var education = {
    "schools": [
        {
            "name": "Western Governors University",
            "location": "Salt Lake City, Utah",
            "datesAttended": "November 2009 - November 2013",
            "degree": "Bachelor of Science",
            "majors": 'Information Technology',
            'school url': 'wgu.edu'
        }
    ],
    "onlineCourses": [
        {
            "name": "Udacity Nanodegree",
            "year": "July 2015",
            "url": "https://www.udacity.com/nanodegree"
        },
        {
          'name': 'Code School JavaScript Path',
          'year': 2014,
          'url':'codeschool.com'

        },
        {
          'name': 'Hack Reactor Prep Course',
          'year': 2015,
          'url': 'hackreactor.com'
        }
    ]
};

education.display = function () {
    displaySchools = function () {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolNameAndDegree = HTMLschoolNameAndDegree.replace("%data%",
                education.schools[school].name + " - " + education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

            var schoolMajors = education.schools[school].majors[0];
            for (var i = 1; i < education.schools[school].majors.length; i++) {
                schoolMajors = schoolMajors + education.schools[school].majors[i];
            }

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolMajors);

            $(".education-entry:last").append(formattedSchoolNameAndDegree);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    };
    displaySchools();




    displayCourses = function () {
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var course in education.onlineCourses) {
            //$(".education-entry:last").append(HTMLonlineClasses);

            var formattedCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
            var formattedCourseYear = HTMLonlineDates.replace("%data%", education.onlineCourses[course].year);
            var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedCourseName);
            $(".education-entry:last").append(formattedCourseYear);
            $(".education-entry:last").append(formattedCourseURL);

        }
    };
    displayCourses();
};
education.display();

var projects = {

   projects :[
     {
          title: 'Adventure Usa website',
          location: 'Margate, Florida',
          dateworked: 'may/2015',
          description: 'website created for old employer to work with exportation services',
          url:'adventure01.com',
          imagepic : 'images/screen1.png'
     },
     {
            title: 'Atumos website',
            location: 'Coral Springs, Florida',
            dateworked: 'sep/2015',
            description: 'Hack Reactor has requested me to orhanize a project, then I created this website and build a game in javascript',
            url: 'atumos.com/forca.html',
            imagepic :'images/screen2.png'
       }
     ]
 };


projects.display = function () {

    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dateworked);
        var myProjectUrl = HTMLprojectUrl.replace('%data%', projects.projects[project].url);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $('.project-entry:last').append(myProjectUrl);
        $(".project-entry:last").append(formattedProjectDescription);

        //if (projects.projects[project].imagepic.length > 0) {
          //  for (image in projects.projects[project].imagepic) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].imagepic);
                $(".project-entry:last").append(formattedProjectImage);
            //}
        //}


    }
};
projects.display();


///////Data////////////
var onlineCourses = [
    {
      schoolname: "Udacity",
        course: "Javascript basic",
        year2: "July 2015",
        url: "https://www.udacity.com/nanodegree"
    },
    {
      schoolname: "Code School",
      course: 'Code School JavaScript Path',
      year2: 2014,
      url:'codeschool.com'

    },
    {
      schoolname: "Hack Reactor",
      course: 'Hack Reactor Prep Course',
      year2: 2015,
      url: 'hackreactor.com'
    },
    {
      schoolname: "CodeCademy",
      course: 'Javascript',
      year2: 2015,
      url: 'https://www.codecademy.com/'
    }
];

////////////Data Filter/////////
var $items2 = $('.items2');
var $schoolname = $('.schoolname');
var $course = $('.course');
var $year2 = $('.year2');
var $url = $('.url');

onlineCourses.filter(function(item2, i){
  $items2.append('<option value = "' + i + '">' + item2.schoolname + '</option>');
});

$items2.on('change', function(){
  var online = onlineCourses[$items2.val()];

  if(online){
  $schoolname.html(online.schoolname);
  $course.html(online.course);
  $year2.html(online.year2);
  $url.html(online.url);
} else{
  $schoolname.html('');
  $course.html('');
  $year2.html('');
  $url.html('');
}
});



///////////////



$("#mapDiv").append(googleMap);
