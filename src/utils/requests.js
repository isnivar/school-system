import { allGroups } from "../responses/groups";
import { students } from "../responses/groups";
import { loginUsersRes } from "../responses/loginResponse";
import { URLs } from "./utils"


export const login = async (usr, pass, type) => {
    
    try {
        const url = URLs.urlFake+'/login';

        // const formData = new FormData();

        // formData.append('usr', usr);
        // formData.append('load', load);
        // formData.append('type', type);
        
        //this is the correct way to do it, at this point we are mocking the responses, so we are going to return a mock response
        // const response = await fetch(url, {
        //     method: 'POST',
        //     body: formData,
        // });
        console.log("url used: "+ url);

        const response = loginUsersRes;
        
        // if(!response.ok || response.status !== 200){
        //     console.log('error: '+ response.status);
        //     return null;
        // }
        // here we are mocking the destructuring of the object and returning the value
        // const {data} = await response.json();
        const data = response.filter((user) => user.user === usr && user.password === pass && user.typeCode == type);
        if(data.length <= 0){
            return null;
        }
        return data;
        
    }catch(e){
        console.error(e);
    }
}

export const getAllGroups = async (usr, type) => {

    try {
        const url = URLs.urlFake+'/groups';
        console.log("url used: "+ url);

        //this is an example of how works in a get scenario
        // const response = await fetch(url);

        // if(!response.ok || response.status !== 200){
        //     console.log(`status:${response.status}`);
        //     return null;
        // }

        // const {data} = await response.json();
        const {groups} = allGroups;
        console.log(groups)
        return groups;
    }catch(e){
        console.error(`Error: ${e}`);
        return null;
    }
}

export const getAllStudentsByGroup = async(group) => {
    try {
        const url = URLs.urlFake+'/students/group';
        console.log("url used: "+ url);

        //this is an example of how works in a get scenario
        // const response = await fetch(url);

        // if(!response.ok || response.status !== 200){
        //     console.log(`status:${response.status}`);
        //     return null;
        // }

        // const {data} = await response.json();
        const {students} = students;
        console.log(students)
        
        return students;
    }catch(e){
        console.error(`Error: ${e}`);
        return null;
    }
}