sparkbe.serverfunction("test", (sf) => {
    sf.response.SendJson({
        "res": "test message"
    })
})

sparkbe.serverfunction("files", (sf) => {
    fs.readdir("files", (err, files) => {
        if(!err) {
            sf.response.SendJson({
                "files": files
            })
        } else {
            throw err 
        }
    })
})