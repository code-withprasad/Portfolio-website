
  // /*  =============================   Typing animation  ========================================== *

  var typed = new Typed(".typing" , {
      strings:["Web-Developer","Java-Programmer","Python-Programmer"],
      typeSpeed:100,
      backSpeed:60,
      loop:true
  });


    // /*  =============================   Aside  ========================================== *


    const nav = document.querySelector(" .nav"),
           navList = nav.querySelectorAll("li"),
           totalNavList = navList.length,
           allSection = document.querySelectorAll(".section"),
           totalSection = allSection.length;
           for(let i=0; i<totalNavList; i++)
           {
              const a = navList[i].querySelector("a");
              a.addEventListener("click", function()
              {

                
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.remove("back-section");
                }
                for(let j=0; j<totalNavList; j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                    //   console.log("back-section" + navList[j].querySelector("a"))
                       allSection[j].classList.add("back-section");

                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                 this.classList.add("active")
                 showSection(this);
                //  if(window.innerWidth < 1200)
                //  (
                //     asideSectionTogglearBtn()
                //  )
              })
           }
           
           function showSection(element)
           {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("active");
            }
             const target = element.getAttribute("href").split("#")[1];
             document.querySelector("#" + target).classList.add("active")
           }
            
           function updateNav(element)
           {
               for(let i=0; i<totalNavList; i++)
               {
                  navList[i].querySelector("a").classList.remove("active");
                  const target = element.getAttribute("href").split("#")[1];
               }
           }
           document.querySelector(".hire-me").addEventListener("click", function(){

                 showSection(this);
                 updateNav(this);
           })
           const navTogglerBtn = document.querySelector(".nav-togglear"),
                 aside = document.querySelector(".aside");
                 navTogglerBtn.addEventListener("click", () => {

                    asideSectionTogglearBtn();
                 })
                 function asideSectionTogglearBtn()
                 {
                   aside.classList.toggle("open");
                   navTogglerBtn.classList.toggle("open")
                   for(let i=0; i<totalSection; i++)
                   {
                    allSection[i].classList.toggle("open");
                   }
                 }

