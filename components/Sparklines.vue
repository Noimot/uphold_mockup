<template>
  <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
</template>

<script>
const gradients = [
  ["red"]["red"],
  ["#1feaea"],
  ["#00C8", "#1feaea", "#1feaea"],
  ["#00C8", "violet"],
  ["#00C8", "green", "red"],
  ["green", "green", "red"]
];

export default {
  data: () => ({
    width: 2,
    radius: 15,
    padding: 2,
    lineCap: "straight",
    gradient: gradients[5],
    value: [0, 0, 0, 0, 0, 0, 15, 14, 15, 14, 15, 14, 15, 14, 14],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false
  })
};
</script>
