/**
 * Calculate Pi using the Monte Carlo method
 * 
 * The Monte Carlo method estimates π by randomly generating points
 * in a unit square and counting how many fall inside a quarter circle.
 * 
 * The ratio of points inside the circle to total points approximates π/4
 */

/**
 * Generates a random point in the unit square [0,1] x [0,1]
 */
function randomPoint(): { x: number; y: number } {
  return {
    x: Math.random(),
    y: Math.random()
  };
}

/**
 * Checks if a point is inside the quarter circle (radius = 1)
 */
function isInsideCircle(point: { x: number; y: number }): boolean {
  return point.x * point.x + point.y * point.y <= 1;
}

/**
 * Estimates Pi using Monte Carlo simulation
 * @param iterations - Number of random points to generate
 * @returns Estimated value of Pi
 */
export function calculatePi(iterations: number): number {
  let insideCircle = 0;

  for (let i = 0; i < iterations; i++) {
    const point = randomPoint();
    if (isInsideCircle(point)) {
      insideCircle++;
    }
  }

  // Pi ≈ 4 * (points inside circle / total points)
  return 4 * (insideCircle / iterations);
}

/**
 * Calculates Pi with progress reporting
 */
export function calculatePiWithProgress(
  iterations: number,
  onProgress?: (progress: number, currentEstimate: number) => void
): number {
  let insideCircle = 0;
  const reportInterval = Math.floor(iterations / 100) || 1;

  for (let i = 0; i < iterations; i++) {
    const point = randomPoint();
    if (isInsideCircle(point)) {
      insideCircle++;
    }

    if (onProgress && i % reportInterval === 0) {
      const progress = (i / iterations) * 100;
      const currentEstimate = 4 * (insideCircle / (i + 1));
      onProgress(progress, currentEstimate);
    }
  }

  return 4 * (insideCircle / iterations);
}

// Example usage
if (require.main === module) {
  console.log('Calculating Pi using Monte Carlo method...\n');

  const iterations = [1000, 10000, 100000, 1000000];

  iterations.forEach(n => {
    const estimatedPi = calculatePi(n);
    const error = Math.abs(Math.PI - estimatedPi);
    const errorPercent = (error / Math.PI) * 100;

    console.log(`Iterations: ${n.toLocaleString()}`);
    console.log(`  Estimated π: ${estimatedPi.toFixed(6)}`);
    console.log(`  Actual π:    ${Math.PI.toFixed(6)}`);
    console.log(`  Error:       ${error.toFixed(6)} (${errorPercent.toFixed(2)}%)\n`);
  });

  console.log('\nCalculating with progress (10M iterations)...');
  calculatePiWithProgress(10000000, (progress, estimate) => {
    if (progress % 10 === 0) {
      process.stdout.write(`\rProgress: ${progress.toFixed(0)}% - Current estimate: ${estimate.toFixed(6)}`);
    }
  });
  console.log('\nDone!');
}
