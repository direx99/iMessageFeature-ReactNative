import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const BallGrid = () => {
  const [selectedBall, setSelectedBall] = useState(null);

  const handleBallPress = (ballIndex) => {
    setSelectedBall(ballIndex);
  };

  const renderBalls = () => {
    const balls = [];

    for (let i = 0; i < 16; i++) {
      const ballStyles = [styles.ball];
      if (selectedBall !== null && selectedBall !== i) {
        ballStyles.push(styles.blur);
      } else if (selectedBall === i) {
        ballStyles.push(styles.selected);
      }

      balls.push(
        <TouchableOpacity
          key={i}
          style={ballStyles}
          onPress={() => handleBallPress(i)}
        />
      );
    }

    return balls;
  };

  return <View style={styles.container}>{renderBalls()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    margin: 10,
  },
  blur: {
    opacity: 0.5,
  },
  selected: {
    backgroundColor: 'green',
  },
});

export default BallGrid;
