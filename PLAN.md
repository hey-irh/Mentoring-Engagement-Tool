FOLDER

    public

    src

        components

            App 

            SessionsPage 

                state: sessions -
                    example of state: [{id: 0, timestamp: "09/11/2020 16:22", notes ["Note 1", "Note 2", "Note 3"]}] (Add mentor_id and mentee_id) useState([])

                GETS all sessions -
                    use useEffect with a fetch request to "/sessions" with empty dependency array

                handleclick(id, newNote) {
                    session[id] = [...notes, newNote]
                } (send entire object (or smaller object) to the server to PATCH at /sessions/:id)

                render
                    
                    simple header "Sessions"?

                    create session button

                    map across sessions using id as key and render SessionBlock for each object in array

            SessionBlock 

                state: newNote (text), renderTextarea (boolean)

                props: session, handleclick -
                    example of session: {id: 0, timestamp: "09/11/2020 16:22", notes ["Note 1", "Note 2", "Note 3"]} (Add mentor_id and mentee_id) 

                    handleclick parameters: (id, newNote)

                render 

                    paragraph (or something similar) containing session and date time

                    map over the notes array using index as the key

                        each note can be paragraph

                    add new note button toggles state of renderTextarea to true

                    add textarea and a button for setting state of newNote.
                    Button calls handleclick.

            CreateSessionPage

                state: date, time, note (date and time could be combined)

                render

                    header for title

                    input tags for date and time

                    textarea for note

                    img for the course structure

                    submit button which calls something
                    
                    (KNOWLEDGE GAP)





    package-lock.json

    package.json
