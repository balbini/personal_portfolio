$(document).ready(function(){
  let objectArray = [
    {
      name: "Paladin",
      description: "An app designed for players of Dungeons and Dragons to create characters and maintain information about the party in their campaign. Built with Ruby on Rails, Javascript, Devise, and Materialize.",
      project_link: "https://salty-everglades-69252.herokuapp.com/"
    },
    {
      name:"Galli Consulting, Inc.",
      description: "This is a project for Galli Consulting, Inc. An accounting and financial consulting firm. Built in NodeJS, Express, Handlebars, and Materialize.",
      project_link:"https://stormy-sea-11849.herokuapp.com/"
    },
    {
      name: "MicDrop",
      description: "An app designed for people to create playlists and share them with others. Built with MongoDB, Express, NodeJS and Bootstrap.",
      project_link: "https://micdropapp.herokuapp.com/playlists"
    },
    {
      name: "Vagabond",
      description: "An app created for users to create posts about interesting aspects of various cities. Built with Ruby on Rails, Javascript, and Materialize.",
      project_link: "https://vast-falls-69882.herokuapp.com/"
    }
  ];
    for (i = 0; i < objectArray.length; i++){
        console.log("jquery");
          $("#projects").append(`<a href="${objectArray[i].project_link}"><h4 class="project_name">${objectArray[i].name}</h4></a>
          <p class="project_description">-${objectArray[i].description}</li>`)
          $("#img_1").attr("src", `${objectArray[i].project_link}`);
          console.log("working");
        }
    $(".project_name").hover(
      function(){
        $(".project_description").animate({
          opacity: "toggle",
          height: "toggle",
          width: "toggle"
        }, 1000);
        console.log("animating");
      }
    );
  }
)
