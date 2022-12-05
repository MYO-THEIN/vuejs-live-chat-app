import { ref } from 'vue'
import { firestoreDB } from '../firebase/config'
import { collection, addDoc,
        doc, deleteDoc,
        query, orderBy, getDocs, getDoc } from 'firebase/firestore'

let useCollection = (collectionName)=>{
    let error = ref(""),
        documents = ref([]),
        document = ref(null);

    // Create
    let addDocument = async(newDoc)=>{
        try {
            let collectionRef = collection(firestoreDB, collectionName);
            let response = await addDoc(collectionRef, newDoc);
            if (!response || response.id === 0)
                throw new Error(`Couldn't create new document in ${collectionName}`);
            return response.id;
        } catch (err) {
            error.value = err.message;
        }
    },
    // Delete
    deleteDocument = async(docID)=>{
        try {
            let docRef = doc(firestoreDB, collectionName, docID);
            await deleteDoc(docRef);
        } catch (err) {
            error.value = err.message;
        }
    },
    // Read all docs
    getAllDocuments = async()=>{
        try {
            documents.value = [];
            let collectionRef = collection(firestoreDB, collectionName),
                q = query(collectionRef, orderBy("created_at"));
            
            let response = await getDocs(q);
            if (!response) 
                throw new Error(`Couldn't fetch documents from ${collectionName}`);

            documents.value = response.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
        } catch (err) {
            error.value = err.message;
        }
    },
    // Read one doc
    getOneDocument = async(docID)=>{
        try {
            document.value = null;
            let docRef = doc(firestoreDB, collectionName, docID);
            let response = await getDoc(docRef);
            if (!response) 
                throw new Error(`Couldn't fetch document with ID ${docID} from ${collectionName}`);

            document.value = response.data();
        } catch (err) {
            error.value = err.message;
        }
    }

    return {
        error, documents, document,
        addDocument, deleteDocument,
        getAllDocuments, getOneDocument
    }
}

export default useCollection;
