angular.module("Prometheus.services").factory('RickshawDataTransformer', [function() {
  function parseValue(value) {
    if (value == "NaN" || value == "Inf" || value == "-Inf") {
      return 0; // TODO: what should we really do here?
    } else {
      return parseFloat(value);
    }
  }

  function metricToTsName(labels) {
    var tsName = labels["name"] + "{";
    var labelStrings = [];
    for (label in labels) {
      if (label != "name") {
        labelStrings.push(label + "=\"" + labels[label] + "\"");
      }
    }
    tsName += labelStrings.join(",") + "}";
    return tsName;
  }

  return function(data, stacked) {
    var palette = new Rickshaw.Color.Palette();
    var series = [];
    for (var i = 0; i < data.length; i++) {
      if (!data[i]) {
        continue;
      }

      series = series.concat(data[i]['data'].Value.map(function(ts) {
        return {
          name: metricToTsName(ts.Metric),
          labels: ts.Metric,
          data: ts.Values.map(function(value) {
            return {
              x: value.Timestamp,
              y: parseValue(value.Value)
            }
          }),
          color: palette.color()
        };
      }));
    }
    if (stacked) {
      Rickshaw.Series.zeroFill(series);
    }
    return series;
  };
}]);
