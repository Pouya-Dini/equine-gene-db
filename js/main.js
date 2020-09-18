// horse is 87, 87, 86
var output = '';


 var tt1 = '<abbr title="A cutoff of maternal expression (M) >= 75% and paternal expression (P) &lt; 25% for maternally expressed candidates and M &lt; 25% and P >= 75% for paternally expressed genes were used, respectively"> ? </abbr>';
 

 var tt2 = '<abbr title="the MAE genes grouped into four groups based on the parental bias in their expression (Group A; 100%, Group B; 100 > - > 90%, Group C; 90 >= - > 80%, and Group D; 80 >= - >= 75% ) "> ? </abbr>';

 var tt3 = '<abbr title="The methylated cytosines with a sequencing depth >= five, and their corrected P Value of binomial test <= 0.01 were annotated to equine transcriptome. The imprinted ggenes defined as genes  that were both monoallelically expressed and had methylated cytosines"> ? </abbr>';
 var tt4 = '<abbr title="The SNPs were  detected in RNA-Seq reads and were confirmed with WGS of the samples"> ? </abbr>';
 var tt5 = '<abbr title="Corrected Binomial p-value to detec monoallelic expression (FDR <0.05)"> ? </abbr>';





 $(document).ready(function(){

  

  $("#searchbtn").click(function(){
    
    
    


    window.scrollTo(0, document.getElementById('filter-records').offsetTop)
    $('#filter-records').html('');
    var searchField = $("#txt-search").val();

    if(searchField === '')  {
      $('#filter-records').html('<font color="red">No search input! </font>');
      return;
  }

 var regex = new RegExp(searchField, "i");
    var output = '<div class="container records">';
    var count = 0;
      $.each(data, function(key, val){
        if ((val.GENE_SYMBOL.search(regex) != -1) || (val.ENSEMBLID.search(regex) != -1) || (val.DESC.search(regex) != -1)) {
          output += '<div class="row"><div class="col-lg-12">';      
          output += '<h3>' + val.GENE_SYMBOL + '</h3>';
          output += '<p ><b>' + val.DESC + '</b></p> </div></div>';
          output += '<div class="row"><div class="col-md-6"><p><b>ID </b>: <a class="alink" href=" http://www.ensembl.org/id/' + val.ENSEMBLID + '" target="_blank">'+val.ENSEMBLID+'</a></p>';
          
          output += '<p> <b>Gene Type: </b>' + val.PTYPE + '</p>';
          output += '<p> <b>Chromosome:</b> ' + val.CHR + '</p>';
          output += '<p> <b>Strand:</b> ' + val.STRAND + '</p>';
          output += '<p><b> Parental Status</b>  '+tt1+'  : ' + val.PSTATUS + '</p>';
          output += '<p><b> ASE Group</b>  '+tt2+'  : ' + val.MAE + '</p>';
          output += '<p><b> Imprinting Status</b>  '+tt3+'  : ' + val.STATUS + '</p>';
          output += '<p><b> #SNPs </b>  '+tt4+'  : Total - ' + val.TOTSNP + '</p>';
          output += '<p>Maternal&nbsp;&nbsp;&nbsp;&nbsp;'+val.MSNP+' ['+val.PERMSNP+'%]</p>';
          output += '<p>Paternal&nbsp;&nbsp;&nbsp;&nbsp;'+val.PSNP+' ['+val.PERPSNP+'%]</p></div>';
          output += '<div class="col-md-6"><p><b> #Trios with SNPs </b>  : ' + val.NTRIOS + '</p>';
          output += '<p><b> Parental Bias in 6 Trios (%)</b> : </p>';
          output += '<p>Trios 1  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS1 +'</p>';
          output += '<p>Trios 2  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS2 +'</p>';
          output += '<p>Trios 3  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS3 +'</p>';
          output += '<p>Trios 4  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS4 +'</p>';
          output += '<p>Trios 5  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS5 +'</p>';
          output += '<p>Trios 6  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS6 +'</p>';
          output += '<p><b> p-value </b>  '+tt5+'  : ' + val.PVAL + '</p></div>';
          output += '</div>';
          
          output += '</div><br><div class="container records">'
          
          count++;
        }
      });
      output += '</div>';

      
      $('#filter-records').html('<font color="blue">'+count+'</font><font color="grey"> results found for the search </font><font color="blue">'+searchField+'</font>. <br><br>'+output);
      //$('#notify').hide();
  });
});

// $(document).ready(function(){

  

//   $("#searchbtn").click(function(){
    
    
    


//     window.scrollTo(0, document.getElementById('filter-records').offsetTop)
//     $('#filter-records').html('');
//     var searchField = $("#txt-search").val();

//     if(searchField === '')  {
//       $('#filter-records').html('<font color="red">No search input! </font>');
//       return;
//   }

//  var regex = new RegExp(searchField, "i");
//     var output = '<div class="row records">';
//     var count = 0;
//       $.each(data, function(key, val){
//         if ((val.GENE_SYMBOL.search(regex) != -1) || (val.ENSEMBLID.search(regex) != -1) || (val.DESC.search(regex) != -1)) {
//           output += '<div class="col-lg-12">';      
//           output += '<h3>' + val.GENE_SYMBOL + '</h3>';
           
//           output += '<p><b>ID </b>: <a class="alink" href=" http://www.ensembl.org/id/' + val.ENSEMBLID + '" target="_blank">'+val.ENSEMBLID+'</a></p>';
//           output += '<p style="overflow-wrap:break-word;" ><b>Description:</b> ' + val.DESC + '</p> ';
//           output += '<p> <b>Gene Type: </b>' + val.PTYPE + '</p>';
//           output += '<p> <b>Chromosome:</b> ' + val.CHR + '</p>';
//           output += '<p><b> Parental Status</b>  '+tt1+'  : ' + val.PSTATUS + '</p>';
//           output += '<p><b> MAE Group</b>  '+tt2+'  : ' + val.MAE + '</p>';
//           output += '<p><b> Imprinting Status</b>  '+tt3+'  : ' + val.STATUS + '</p>';
//           output += '<p><b> #SNPs </b>  '+tt4+'  : Total - ' + val.TOTSNP + ' &nbsp;&nbsp;&nbsp;&nbsp; Maternal - '+val.MSNP+' ['+val.PERMSNP+'%] &nbsp;&nbsp;&nbsp;&nbsp; Paternal - '+val.PSNP+' ['+val.PERPSNP+'%]</p>';
//           output += '<p><b> #Trios with SNPs </b>  : ' + val.NTRIOS + '</p>';
//           output += '<p><b> Parental Bias in 6 Trios (%)</b> : </p>';
//           output += '<p>Trios 1  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS1 +'</p>';
//           output += '<p>Trios 2  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS2 +'</p>';
//           output += '<p>Trios 3  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS3 +'</p>';
//           output += '<p>Trios 4  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS4 +'</p>';
//           output += '<p>Trios 5  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS5 +'</p>';
//           output += '<p>Trios 6  &nbsp;&nbsp;&nbsp;&nbsp;'+ val.BIAS6 +'</p>';
//           output += '<p><b> p-value </b>  '+tt5+'  : ' + val.PVAL + '</p>';
//           output += '</div>';
          
//           output += '</div><br><div class="row records">'
          
//           count++;
//         }
//       });
//       output += '</div>';

      
//       $('#filter-records').html('<font color="blue">'+count+'</font><font color="grey"> results found for the search </font><font color="blue">'+searchField+'</font>. <br><br>'+output);
//       //$('#notify').hide();
//   });
// });


$(document).ready(function(){

  $(".tabs-list li a").click(function(e){
     e.preventDefault();
  });

  $(".tabs-list li").click(function(){
     var tabid = $(this).find("a").attr("href");
     $(".tabs-list li,.tabs div.tab").removeClass("active");   // removing active class from tab

     $(".tab").hide();   // hiding open tab
     $(tabid).show();    // show tab
     $(this).addClass("active"); //  adding active class to clicked tab

  });

});






// $('#txt-search2').keyup(function(){
//     var searchField = $(this).val();
    
//     if(searchField === '')  {
//         $('#filter-records').html('');
//         return;
//     }
    
//     var regex = new RegExp(searchField, "i");
//     var output = '<div class="row">';
//     var count = 1;
//       $.each(data, function(key, val){
//         if ((val.GENE.search(regex) != -1) || (val.ENSECA.search(regex) != -1)) {
//           output += '<div class="col-md-6 well">';
//           output += '<div class="col-md-3"></div>';
//           output += '<div class="col-md-7">';
//           output += '<h5>' + val.ENSECA + '</h5>';
//           output += '<p>' + val.GENE + '</p>'
//           output += '</div>';
//           output += '</div>';
//           if(count%2 == 0){
//             output += '</div><div class="row">'
//           }
//           count++;
//         }
//       });
//       output += '</div>';

//       console.log(output);
//       $('#filter-records').html(output);
// });
