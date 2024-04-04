import conf from "../conf/conf.js";
import { Client , ID , Account } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email , password , name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email , password , name);
            if(userAccount){
                return this.login({email , password});
            }else{
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email , password}){
        try {
            const userLogin = await this.account.createEmailSession({email , password});
            return userLogin; 
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("current user");
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("logout user");
        }
    }

}

const authservice = new AuthService();

export default authservice;