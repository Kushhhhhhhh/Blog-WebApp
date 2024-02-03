import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client()
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost ({ title, slug, description, image, userid, status }) {
        try {
          return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            ID.unique(),
            {
              title,
              slug,
              description,
              image,
              userid,
              status
            }
          )
        } catch (error) {
            console.log(`createPost error: ${error}`);
        }
    }

    async updatePost (slug,{ title, description, image, status }) {
        try {
          return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
              title,
              description,
              image,
              status
            }
          )
        } catch (error) {
            console.log(`updatePost error: ${error}`);
        }
    }

    async deletePost (slug) {
        try {
           await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
          )
          return true;
        } catch (error) {
            console.log(`deletePost error: ${error}`);
            return false;
        }
    }

    async getPost (slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(`getPost error: ${error}`);
        }
    }

    async getPosts (queries = [Query.equal('status', 'active')]) {
        try {
               await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
            return true;
        } catch (error) {
            console.log(`getPosts error: ${error}`);
            return false;
        }
    }

    // File Upload Service
    async uploadFile (file) {
        try {
            await this.storage.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
        } catch (error) {
            console.log(`uploadFile error: ${error}`);
            return false
        }
    }

    async deleteFile (fileId) {
        try {
            await this.storage.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true;

        } catch (error) {
            console.log(`deleteFile error: ${error}`);
            return false;
        }
    }

    async getFilePreview (fileId) {
        try {
            await this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log(`getFilePreview error: ${error}`);
        }
    }
}

const service = new Service()

export default service