/**
 * Question
    Write a loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */
let design = ""
for (let i = 1; i < 8; i++) {
    design += "#"
    console.log(design)
}