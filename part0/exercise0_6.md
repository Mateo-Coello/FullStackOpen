
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: { content: "May the force be with you!", date: "2025-03-12T22:30:02.520Z"}
    server-->>browser: HTTP 201 - note created 
    deactivate server    
```