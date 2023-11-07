import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin/Signin';
import Verify from './Components/Signin/Verify';
import AdminVerify from './Components/Signin/AdminVerify';
import Signup from './Components/Signup/Signup';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from './Components/Home';
import File from './Components/Files/File'
import FileList from './Components/FileList/FileList'
import AdminSignin from './Components/Signin/AdminSignin'
import { useState } from 'react';
import NavbarStatus from './Components/NavbarStatus';
import AdminAccess from './Components/Signin/AdminAccess';
import Footer from './Components/Footer';
import PopUpForm from './Components/FileList/PopUpForm';


function App() {
  const[isLogin,setLogins]= useState(true)
  const[isAdmin,setAdmin]=useState(false)
  const[word,setWord]=useState('')
  const handleInputChange = (e) => {
    setWord(e.target.value);
  };
  const logout=()=>{
    setLogins(true)
    setAdmin(false)
  }

  const [filelist,setFileList]=useState([])
  const[isLoading,setLoading]=useState(false)
  
const searchClick=()=>{
//setFileList([])
setLoading(true)
if(word!='')
axios.get("https://app-miok.onrender.com/file/phrases",{
  params:{
    phrase:word
  }
}).then(res=>{

  
//console.log(Object.keys(res.data[0].finalwords))
   
  setFileList(res.data);

  if(window.location.pathname!="/filelist")
  {
        
  }

  setLoading(false)

  
  
})
}


  // setFileList([])
  // let f=[]
  // let w=word.toLowerCase()
  // let x=0;
  // for(x=0;x<files.length;x++){
  //   if(files[x].fileText.toLowerCase().includes(w)||files[x].fileName.toLowerCase().includes(w))
  //   {
  //     f.push(files[x])
  //     console.log(filelist)
      
  //   }
  // }
  //setFileList(f)



  const files= 
    [{
      fileName:'1910 Dec[2].pdf',
      fileText:'There was much excitement among Negroes during the election in Oklahoma. The attempt was made to shut out all of the Negro voters. There was some rioting, Negroes at Guthrie seizing the voting booth and ousting election officers at other places. The last news is that the Democrats propose to throw out the votes of all precincts where Negroes voted. Such wholesale disfranchisement would save the Democrats the legislature and perhaps the governorship. There has been some conflict between State and Federal authorities on the subject. Resolutions charging the Republican leaders of Oklahoma with delinquency in supporting the Negro race and calling upon the Negroes of the State to support the entire Socialist ticket were adopted by an association of amalgamated Negro organizations of the State, which was organized there.'
    },
    {
      fileName:'file1.pdf',
      fileText:'The Madhuvan Jyotirlinga was different from the other twelve, in terms of its sheer size. Standing at a height of one gavuta, it was almost four gavutas in circumference and was made of gleaming black stone. The sign of Aum was handpainted in red at the top of the Jyotirlinga, presumably by the pundit of the temple. A large trishul measuring five feet in length, with three sharp protrusions, lay behind the Jyotirlinga.'
    },
    {
      fileName:'file2.pdf',
      fileText:'The science of mind management requires transforming ourselves through beneficial chintan. Whenever we come across a gem of knowledge, whether in this book or elsewhere, we should note it down for permanency in our spiritual diary. Then we should contemplate on it deeply and repeatedly. Even one piece of knowledge, if sufficiently reflected upon, has the power to transform us eternally.'
    },
    {
      fileName:'file3.pdf',
      fileText:'Dark means DARK. “They’ve done studies where they shine a laser on the back of someone’s knee, and people pick it up. It’s light. You cannot have your phone in your room. You cannot have a TV in your room. It needs to be black, black as night.” Soft is the solution for bedding. “Today’s modern human needs to sleep on a soft mattress. Ideally, you would be sleeping in a hammock. You should be waking up in the morning feeling amazing without having to loosen up your lower back. Most athletes and people are extension-sensitive because of excessive sitting and extension-biased training (e.g., running, jumping, squatting).'
    },
    {
      fileName:'Volumes 1-2 1910-1911[1].pdf',
      fileText:'The United Colored Democracy of the State of New York has been organized for the coming campaign. They demand a colored regiment in the New York National Guard, and alsocolored policemen and firemen.ark means DARK. “They’ve done studies where they shine a laser on the back of someone’s knee, and people pick it up. It’s light. You cannot have your phone in your room. You cannot have a TV in your room. It needs to be black, black as night.” Soft is the solution for bedding. “Today’s modern human needs to sleep on a soft mattress. Ideally, you would be sleeping in a hammock. You should be waking up in the morning feeling amazing without having to loosen up your lower back. Most athletes and people are extension-sensitive because of excessive sitting and extension-biased training.'
    }
  ]


  const deleteClick=(filename)=>{
    axios.delete("https://app-miok.onrender.com/file/delete",{
      params:{
        magazineName:filename
      }
    }).then(res=>{
      console.log("hii")
      searchClick(word)
    })

  }

  const sortFileName=()=>{
    setFileList([])
    if(word!=''){
axios.get("https://app-miok.onrender.com/byfileName",{
  params:{
    word:word
  }
}).then(res=>{
  console.log(typeof(res.data),typeof(filelist))
  setFileList(res.data)
  
  
})
  }
}
const sortAuthorName=()=>{
  //setFileList([])
  setLoading(true)
  
axios.get("https://app-miok.onrender.com/file/get").then(res=>{
console.log(typeof(res.data),typeof(filelist))
setFileList(res.data)
setLoading(false)

})

}

const sortYear=()=>{
  setLoading(true)

axios.get("https://app-miok.onrender.com/file/sortYear",{
params:{
  phrase:word
}
}).then(res=>{
console.log(typeof(res.data),typeof(filelist))
setFileList(res.data)
setLoading(false)

})

}

  const[user,setUser]=useState([])
  const[admind,setAdmind]=useState([
{
  email:'admin@gmail.com',
  password:"admin"
}
  ])
  return (
    <div>
      <Router>
        <NavbarStatus>
      <Navbar isLogin={isLogin} isAdmin={isAdmin} word={word} handleInputChange={handleInputChange} searchClick={searchClick} logout={logout} sortFileName={sortFileName} sortAuthorName={sortAuthorName} sortYear={sortYear} />
      </NavbarStatus>
      <Routes>
      <Route exact path="/" element={<Home word={word} handleInputChange={handleInputChange} searchClick={searchClick} />} />
      <Route exact path="/adminaccess" element={<AdminAccess user={user} isLogin={isLogin} isAdmin={isAdmin} setLogins={setLogins} admind={admind} />} />
      <Route exact path="/signin" element={<Signin user={user} isLogin={isLogin} isAdmin={isAdmin} setLogins={setLogins} sortAuthorName={sortAuthorName} />} />
      <Route exact path="/signup" element={<Signup user={user} setUser={setUser}/>} /> 
      <Route exact path="/verify" element={<Verify user={user} setUser={setUser} setLogins={setLogins}/>} />
      <Route exact path="/adminverify" element={<AdminVerify user={user} setUser={setUser} setAdmin={setAdmin} setLogins={setLogins}/>} />
      <Route exact path="/file" element={<File />} /> 
      <Route exact path="/popupform" element={<PopUpForm setAdmin={setAdmin} setLogins={setLogins} />} />   
      <Route exact path="/filelist" element={<FileList isAdmin={isAdmin} word={word} filelist={filelist} isLoading={isLoading} deleteClick={(filename) => deleteClick(filename)}  />}/>
      <Route exact path="/adminlogin" element={<AdminSignin admind={admind} isLogin={isLogin} isAdmin={isAdmin}  setAdmin={setAdmin} setLogins={setLogins} sortAuthorName={sortAuthorName}/>} />
      </Routes>
      {/* <Footer  /> */}
      </Router>
      
    </div>
  );
}

export default App;
