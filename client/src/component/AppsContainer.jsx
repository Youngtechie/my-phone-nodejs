import { useEffect } from "react";

const AppsContainer = () => {
  window.onload = ()=> {
   fetch('/projects')
  }
  

  useEffect(() => {
    async function getProjects() {
      let url = "/projects";
      try {
        let res = await fetch(url);
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    }

    async function renderProjects() {
      let projects = await getProjects();
      let html = "";
      projects.forEach((element) => {
        let htmlSegment = `
      <section class="icon">
        <img src="/icons/${element.projectImage}" alt="" id="icon-img"/>
        <span class="iconName">${element.projectName}</span>
        <section class="LikeC">
          <section class="heart" onClick={fetch('/add?id=${element.projectId}')}>
            <span class="plusOne">+ 1</span>
            <span class="likes"> ${element.projectLikes}</span>
            <span class="id">${element.projectId}</span>
          </section>
          <section class="hearts one"></section>
          <section class="hearts two"></section>
          <section class="hearts three"></section>
          <section class="hearts four"></section>
        </section>
      </section>`;

        html += htmlSegment;
      });

      let AppsContainer = document.querySelector(".AppsContainer");
      AppsContainer.innerHTML = html;

      let hearts = document.querySelectorAll(".heart");
      hearts.forEach((heart) => {
        heart.addEventListener("click", (e) => {
          let plusOne = heart.querySelector(".plusOne");
          let projectid = heart.querySelector(".id");
          let likes = heart.querySelector(".likes");

            

          plusOne.style.display = "none";
          if (plusOne.style.display === "none") {
            plusOne.style.display = "inline";

            let id = setTimeout(() => {
              plusOne.style.display = "none";

              async function getLike() {
                let url = `/get?id=${parseInt(projectid.innerHTML)}`;
                try {
                  let res = await fetch(url);
                  return await res.json();
                } catch (error) {
                  console.log(error);
                }
              }

              async function renderLike(){
                let data = await getLike()

                likes.innerHTML = `${data[0].projectLikes}`;
              }
              renderLike()
            }, 1000);

          

            return () => {
              clearTimeout(id);
            }
          }
        });
      });
    }

    renderProjects();
  }, []);

  return <section className="AppsContainer"></section>;
};

export default AppsContainer;
