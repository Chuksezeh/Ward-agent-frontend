import { useNavigate } from "react-router-dom";

const PersonalInfoCards = (()=>{

    const userInfo = localStorage.getItem("agentUserInfo");
    const userData = JSON.parse(userInfo);



    const navigate = useNavigate();

    const navigateKeyContacts = (()=>{

      navigate("/key-contacts")
    })


    return(


        <>
        <div className="dashboard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Project Card */}
      <div className="card p-4 border rounded-lg shadow-md bg-white">
        <h1 className="text-xl font-bold">Basic Information</h1>
        <p><strong>Full name:</strong> {userData.nameTitle} {userData.firstName}  {userData.lastName} </p>
        <p><strong>Email:</strong> {userData.email}  </p>
        <p><strong>State:</strong>   {userData.state} </p>
        <p><strong>Local government:</strong>   {userData.lga} </p>
        <p><strong>Ward:</strong>  {userData.ward} </p>
        <p><strong>Access role:</strong>  {userData.accessRole} </p>
        {/* <p><strong>Town:</strong> </p> */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "84%" }}></div>
        </div>
      </div>

      {/* Meetings Calendar */}
      <div className="card p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold">Key Contacts</h2>
        <p>Last updated • Thu, 11</p>

        <p>
        An access-based contact directory  that displays contact information based on the
         user's level of access (LGA, town, etc.), organizing entries alphabetically.
        </p>

        <p>
         
        <button class="button-46" role="button" onClick={navigateKeyContacts}>View contacts</button>
        </p>
      </div>

      {/* Project Roadmap */}
      <div className="card p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold">Project Roadmap</h2>
        <p>Task progress details...</p>
      </div>

      {/* Efficiency Chart */}
      <div className="card p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold">Efficiency</h2>
        <p>+40%</p>
      </div>

      {/* Project Time */}
      <div className="card p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold">Total project time</h2>
        <p>64+ h</p>
      </div>

      {/* AI Assistant */}
      <div className="card p-4 border rounded-lg shadow-md bg-white flex items-center">
        <div>
          <h2 className="text-lg font-bold">AI</h2>
          <p>Smart Assistant</p>
        </div>
        <img src="https://m.foolcdn.com/media/dubs/images/Robot-AI-image-Getty-Images.original.jpg" alt="AI" className="w-16 h-16 rounded-full ml-4" />
      </div>

      <div className="card p-4 border rounded-lg shadow-md bg-white flex items-center">
        <div>
          <h2 className="text-lg font-bold">Personal</h2>
          <p>Health Care</p>
        </div>
        <img src="https://homecentralhealthcare.com/wp-content/uploads/2019/07/Personal-Care_1.jpg" alt="Personal" className="w-16 h-16 rounded-full ml-4" />
      </div>
    </div>

        
        
        </>
    )
})

export default PersonalInfoCards


