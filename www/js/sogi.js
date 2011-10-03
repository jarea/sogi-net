/**
 * @author Mars Chen
 */
jQuery(document).ready(function(){
  jQuery('.mover').mouseenter(function(){
     select_id = jQuery(this).attr('id')
     jQuery('[id=' + select_id + ']').each(
        function(){
            jQuery(this).addClass("mover_on");
        }
     );
      jQuery(this).addClass("mover_on");
  }).mouseleave(function(){
      jQuery('[id=' + select_id + ']').each(
         function(){
            jQuery(this).removeClass("mover_on");        
         }
      )
      jQuery(this).removeClass("mover_on");
  })
});
jQuery(document).ready(function(){
   jQuery('a.iframe').fancybox(
      {
         'width':'75%',
         'height':'75%',
         'autoScale':true,
         'transitionIn':'none',
         'transitionOut':'none',
         'type':'iframe'
      }
   );
   
});
