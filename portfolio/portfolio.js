/* Set the width of the side navigation to 250px */
function openNav() 
    {
      document.getElementById("mySidenav").style.width = "200px";
    }
  
  /* Set the width of the side navigation to 0 */
function closeNav() 
    {
      document.getElementById("mySidenav").style.width = "0";
    }

function homeOpen()
    {
      window.location.href = "../home/frontpage.html";
    }

function contactOpen()
    {
      window.location.href = "../contacts/contacts.html";
    }

function resiezeFn()
    {
      var width = window.innerWidth
      if (width >= 876)  
        {
          scrollTo(0,0)
        }
    }
  onresize = resiezeFn;
  resiezeFn()

function card1()
    {
      window.location.href = "../Digital-Clock/index.html"
    }

function card2()
    {
      alert("I might have challenged myself a tad bit too much and now my head hurts, so this is the best you're getting")
    }

function card3()
    {
      window.location.href = "../Rotating-Image-Gallery/index.html"
    }

function card4()
    {
      window.location.href = "../WAFFLE_SHOP/index.html"
    }
function card5()
    {
      alert("I might have challenged myself a tad bit too much and now my head hurts, so this is the best you're getting")
    }