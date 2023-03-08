const students = [
    {
      name: "Test name 1",
      id: 1,
    },
    {
      name: "Test name 2",
      id: 2,
    },
    {
      name: "Test name 3",
      id: 3,
    },
    {
      name: "Test name 4",
      id: 4,
    },
    {
      name: "Test name 5",
      id: 5,
    },
  ];
  
  const courses = [
    {
      id: 1,
      name: "frontend",
      students: [
        {
          id: 1,
          grades: [10, 9, 8, 10],
        },
        {
          id: 2,
          grades: [7, 9, 8, 10],
        },
        {
          id: 3,
          grades: [10, 9, 8, 4],
        },
      ],
    },
    {
      id: 2,
      name: "socialMedia",
      students: [
        {
          id: 5,
          grades: [6, 7, 8],
        },
        {
          id: 1,
          grades: [],
        },
      ],
    },
    {
      id: 3,
      name: "graphicDesign",
      students: [
        { id: 3, grades: [4, 4] },
        { id: 5, grades: [] },
        { id: 2, grades: [6, 6, 6] },
      ],
    },
  ];
  const courseContainer = document.getElementById("courses");
  const courseDivs = courses.map((element)=>{
    const course = document.createElement("div");
    course.style = `
    width: 200px;
    height: 200px;
    border: 2px solid red;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    course.onclick = () => {
        
        //console.log(element.name)
        localStorage.setItem("courseId",element.id.toString());
        //console.log(element.id)
        window.location.href='course.html';
    
    }
    course.innerText = element.name;
    return course;
  })
  courseContainer.append(...courseDivs)
  console.log(courseDivs);
