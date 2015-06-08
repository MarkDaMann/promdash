//= require spec_helper
describe('RickshawDataTransformer', function() {
  var xfr;
  beforeEach(inject(function(_RickshawDataTransformer_) {
     xfr = _RickshawDataTransformer_;
  }));

  it("transforms the data", function() {
    var values = [[1433494048,"140.52504347826087"],[1433494059,"141.66262318840583"],[1433494070,"140.80916611185427"],[1433494081,"138.5751187685048"],[1433494092,"137.4164917150105"],[1433494103,"137.77044927536232"],[1433494114,"135.5127826086957"],[1433494125,"131.51152173913044"],[1433494136,"126.89191304347827"],[1433494147,"123.87263768115946"],[1433494158,"120.85260869565218"],[1433494169,"118.13994202898554"],[1433494180,"115.16428985507244"],[1433494191,"112.88008695652174"],[1433494202,"109.60834782608694"],[1433494213,"106.74715942028986"],[1433494224,"103.77571541032044"],[1433494235,"102.15278932389536"],[1433494246,"101.40277345476736"],[1433494257,"101.09572567588003"],[1433494268,"101.83672954026005"],[1433494279,"102.23798550724638"],[1433494290,"101.49672463768118"],[1433494301,"100.45414492753623"],[1433494312,"100.36249275362321"],[1433494323,"102.0193913043478"],[1433494334,"103.83636231884059"],[1433494345,"102.9296811594203"],[1433494356,"101.14005797101449"],[1433494367,"98.99485507246379"],[1433494378,"97.51315942028987"],[1433494389,"95.86482608695654"],[1433494400,"95.01560869565218"],[1433494411,"94.2184782608696"],[1433494422,"94.90674725818322"],[1433494433,"96.67680578231933"],[1433494444,"98.11195988877667"],[1433494455,"98.72176238763056"],[1433494466,"98.48050724637682"],[1433494477,"98.58052173913045"],[1433494488,"98.21876811594204"],[1433494499,"97.65139130434785"],[1433494510,"96.90920289855073"],[1433494521,"97.15793218662849"],[1433494532,"97.5511616561132"],[1433494543,"97.12231866182981"],[1433494554,"95.07578260869566"],[1433494565,"92.24534782608698"],[1433494576,"90.04672463768115"],[1433494587,"90.32368115942029"],[1433494598,"90.27576811594206"],[1433494609,"89.07139130434786"],[1433494620,"87.2134347826087"],[1433494631,"86.83410144927538"],[1433494642,"86.86814492753625"],[1433494653,"87.35060869565218"],[1433494664,"88.0397971014493"],[1433494675,"88.25004347826089"],[1433494686,"87.56342028985509"],[1433494697,"87.36784057971018"],[1433494708,"89.17839130434784"],[1433494719,"90.75779710144931"],[1433494730,"91.41137681159424"],[1433494741,"90.43178260869567"],[1433494752,"88.86991304347826"],[1433494763,"86.46852173913047"],[1433494774,"84.41134532440238"],[1433494785,"82.3495907789745"],[1433494796,"80.74325652340173"],[1433494807,"79.67363768115945"],[1433494818,"79.15456521739131"],[1433494829,"79.64420289855072"],[1433494840,"79.92213043478262"],[1433494851,"80.4193768115942"],[1433494862,"80.07313043478263"],[1433494873,"80.36725011510048"],[1433494884,"80.73566412600228"],[1433494895,"81.51902016588961"],[1433494906,"82.03157971014495"],[1433494917,"82.50079710144931"],[1433494928,"83.40437681159422"],[1433494939,"84.2373623188406"],[1433494950,"84.64095652173914"],[1433494961,"84.34986956521742"],[1433494972,"82.84518840579713"],[1433494983,"81.43078260869568"],[1433494994,"81.76178260869568"],[1433495005,"83.56181159420292"],[1433495016,"87.3517971014493"],[1433495027,"90.58031884057974"],[1433495038,"93.7070434782609"],[1433495049,"96.99479710144931"],[1433495060,"100.01028985507243"],[1433495071,"101.64239130434784"],[1433495082,"103.1140434782609"],[1433495093,"104.3770579710145"],[1433495104,"104.84473913043477"],[1433495115,"103.63005797101447"],[1433495126,"102.67107246376813"],[1433495137,"102.16752173913048"],[1433495148,"101.44788405797102"],[1433495159,"100.37679710144924"],[1433495170,"100.07410144927533"],[1433495181,"101.61291304347827"],[1433495192,"101.92494202898553"],[1433495203,"101.1343333333333"],[1433495214,"98.12863768115943"],[1433495225,"96.17872463768117"],[1433495236,"94.57690088220332"],[1433495247,"94.53288493964291"],[1433495258,"95.23476811594205"],[1433495269,"95.66215942028987"],[1433495280,"94.93463768115943"],[1433495291,"94.13053623188407"],[1433495302,"94.23973913043478"],[1433495313,"95.95565217391307"],[1433495324,"98.49580850638313"],[1433495335,"100.8736292795071"],[1433495346,"101.77905874828328"],[1433495357,"100.8509275362319"],[1433495368,"98.75894202898552"],[1433495379,"97.21665217391305"],[1433495390,"97.06343478260872"],[1433495401,"96.60571014492753"],[1433495412,"96.72863131717921"],[1433495423,"97.77315160650286"],[1433495434,"98.74007769292793"],[1433495445,"98.51533333333334"],[1433495456,"97.87597101449276"],[1433495467,"97.22936231884061"],[1433495478,"96.7517391304348"],[1433495489,"95.56550724637682"],[1433495500,"94.6341884057971"],[1433495511,"93.46233333333336"],[1433495522,"92.81282608695652"],[1433495533,"94.22640579710146"],[1433495544,"96.7092463768116"],[1433495555,"98.66249275362321"],[1433495566,"98.78602898550726"],[1433495577,"98.11230434782611"],[1433495588,"97.55556521739129"],[1433495599,"97.28228985507246"],[1433495610,"97.86228985507245"],[1433495621,"97.45937681159421"],[1433495632,"95.13127536231883"],[1433495643,"92.57246376811595"],[1433495654,"91.99388405797102"],[1433495665,"92.74811594202899"],[1433495676,"92.5077971014493"],[1433495687,"91.8606476368662"],[1433495698,"90.50294667085979"],[1433495709,"89.32146376811595"],[1433495720,"89.17573913043482"],[1433495731,"89.60117391304348"],[1433495742,"90.16521739130435"],[1433495753,"90.83926086956525"],[1433495764,"90.99313043478261"],[1433495775,"91.00004347826089"],[1433495786,"89.7328115942029"],[1433495797,"89.00604347826086"],[1433495808,"87.69928985507246"],[1433495819,"88.96391304347829"],[1433495830,"90.08308695652175"],[1433495841,"91.23062318840583"],[1433495852,"89.72266666666668"],[1433495863,"87.76908695652176"],[1433495874,"86.40062318840582"],[1433495885,"85.49140579710148"],[1433495896,"84.56208695652174"],[1433495907,"83.32994202898553"],[1433495918,"83.13965217391306"],[1433495929,"84.23804347826088"],[1433495940,"85.85340579710146"],[1433495951,"86.80960377987402"],[1433495962,"86.70279073692711"],[1433495973,"86.44713711427012"],[1433495984,"87.6124347826087"],[1433495995,"88.38623188405799"],[1433496006,"87.9747536231884"],[1433496017,"86.21784057971016"],[1433496028,"85.46650724637684"],[1433496039,"84.81157971014494"],[1433496050,"84.22204347826087"],[1433496061,"82.75685507246378"],[1433496072,"82.83004347826088"],[1433496083,"85.52224637681162"],[1433496094,"87.5255072463768"],[1433496105,"87.435"],[1433496116,"85.78757154519971"],[1433496127,"84.74730922689052"],[1433496138,"84.56920632887119"],[1433496149,"85.6274347826087"],[1433496160,"87.32698550724639"],[1433496171,"88.94839130434784"],[1433496182,"88.70498550724636"],[1433496193,"88.36734782608696"],[1433496204,"88.97534782608696"],[1433496215,"90.57623188405798"],[1433496226,"91.92016752823214"],[1433496237,"90.88961293850593"],[1433496248,"88.78072463768116"],[1433496259,"86.98543478260872"],[1433496270,"85.94508695652175"]];
    var data = {
      expID: 0,
      type: "prometheus",
      data:{
        type: "matrix",
        value:[{
          metric: {},
          values: values
        }],
        version: 1
      }
    };
    var axisIDObj = {0: 1, 1: 10, 2: 20};

    var got = xfr(data, axisIDObj);

    var want = {
      name: "{}",
      type: "prometheus",
      uniqName: "{}",
      axisID: 1,
      expID: 0,
      labels: {},
      data: values.map(function(d) { return {x: d[0], y: parseFloat(d[1])}; })
    };

    expect(got[0]).toEqual(want);
  });
});
