import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import {useRouter} from "next/router"
import Head from "next/head"

function NewMeetup() {

    const router = useRouter()

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            let data = await response.json()
            console.log(data)
            await router.push('/')
        } else {
            alert("Ошибка HTTP: " + response.status)
        }


    }


    return (
        <>

            <Head>
                <title>Add new Meeting</title>
                <meta
                    name="description"
                    content="Add new meeting"/>
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </>
    )

}

export default NewMeetup