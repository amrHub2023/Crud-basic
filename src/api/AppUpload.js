import { createRef } from "react";

function AppLoad() {
    const fileInput = createRef();

const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("avatar", fileInput.current.value);

try {
        const response = await fetch('/profile', {
            method:"POST",
            body: formData
        });

        const parsedResponse = await response.json();
        if (response.ok) {
            alert("File Uploaded");            
        } else {
            console.error("An error unexpected");
        }

} catch (error) {
        console.error(error.message)
    }
        }
    return (
        <div className="AppLoad">
            <from onSubmit={onSubmit}>
        <input type = "file" name="avatar"/>
        <input type = "submit" name="Submit"/>
            </from>
        </div>

    );
}