<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox">
            <div class="single" v-for="msg in formattedMessages" :key="msg.id">
                <span class="created-at">{{msg.created_at}}</span>
                <span class="name">{{msg.name}}</span>
                <span>{{msg.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onUpdated, ref } from 'vue'
import { firestoreDB } from '../firebase/config'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { formatDistanceToNow } from 'date-fns'
export default {
    setup() {
        // data
        let messages = ref([]),
            msgBox = ref(null);

        // computed
        let formattedMessages = computed(()=>{
            return messages.value.map((msg)=>{
                return {
                    ...msg,
                    created_at: formatDistanceToNow(msg.created_at.toDate())
                }
            })
        })

        // hooks
        onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight;
        })

        let collectionRef = collection(firestoreDB, "messages"),
            q = query(collectionRef, orderBy("created_at"));

        onSnapshot(q, (snapShot)=>{
            let results = [];
            snapShot.docs.forEach((doc)=>{
                if (doc.data().created_at)
                    results.push({id: doc.id, ...doc.data()});
            })

            messages.value = results;
        });

        return {
            messages, msgBox,
            formattedMessages
        }
    }
}
</script>

<style>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
}
.messages {
    max-height: 400px;
    overflow: auto;
}
.single {
    margin: 18px 0;
}
.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
    color: violet;
}
</style>
