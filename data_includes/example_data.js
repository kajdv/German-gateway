var shuffleSequence = seq("consent","setcounter","intro");
//var practiceItemTypes = ["practice"];

var showProgressBar = false;
PennController.ResetPrefix(null);

var items = [

    ["setcounter", "__SetCounter__", { } ] 
    ,    
 //   ["consent", "PennController", PennController(
 //       newHtml("consent", "ProlificConsent.html")
 //           .settings.log()
 //           .settings.css("max-width","40em")
 //           .print()
 //       ,
 //       newButton("consent btn", "Jag g&aring;r med p&aring; att delta i denna studie.")
 //           .print()
 //           .wait( getHtml("consent").test.complete().failure( getHtml("consent").warn() ) )
 //   )]
 //   ,
//    template
//    [["intro", 1], "Form", {
//        continueMessage: null,
//        html:  "<a id='link'> Click here to begin the experiment!</a>"+
//               "<script>document.getElementById('link').setAttribute('href', 'LINK TO EXPT 1 (without url-parameters; ends with experiment.html)?PROLIFIC_PID='+PennController.GetURLParameter("PROLIFIC_PID"));</script>"} ,
//              "__SendResults__", {
//      manualSendResults: true,      
//    }]
//    ,
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicken Sie hier, um fortzufahren!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Ger_DF_discfam/experiment.html?PROLIFIC_PID='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,    
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicken Sie hier, um fortzufahren!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Ger_DF_ahbel/experiment.html?PROLIFIC_PID='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,     
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicken Sie hier, um fortzufahren!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Ger_DF_spbel/experiment.html?PROLIFIC_PID='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,     
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicken Sie hier, um fortzufahren!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Ger_MCP_spact/experiment.html?PROLIFIC_PID='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    , 
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicken Sie hier, um fortzufahren!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Ger_MCP_unm/experiment.html?PROLIFIC_PID='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,      
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Klicken Sie hier, um fortzufahren!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Ger_MCP_v2/experiment.html?PROLIFIC_PID='+PennController.GetURLParameter('PROLIFIC_PID'));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,     
];
