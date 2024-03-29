const sampleData = [
  {
    "al": 23.15,
    "acd": 2.99,
    "lt": 4.72,
    "k1": 43.32,
    "k2": 43.55,
    "cyl": -0.23,
    "Iol-formula": "srk/t",
    "iol_power": 22.61,
    "Iol": 22.5,
    "ref": 0.07,
    "bcva": 6,
    "Impl-iol": 22.5
  },
  {
    "al": 23.15,
    "acd": 2.99,
    "lt": 4.72,
    "k1": 43.32,
    "k2": 43.55,
    "cyl": -0.23,
    "Iol-formula": "barrett UII",
    "iol_power": 22.65,
    "Iol": 22.5,
    "ref": 0.1,
    "bcva": 6,
    "Impl-iol": 22.5
  },
  {
    "al": 23.15,
    "acd": 2.99,
    "lt": 4.72,
    "k1": 43.32,
    "k2": 43.55,
    "cyl": -0.23,
    "Iol-formula": "Holladay 1",
    "iol_power": 22.65,
    "Iol": 22.5,
    "ref": 0.1,
    "bcva": 6,
    "Impl-iol": 22.5
  },
  {
    "al": 23.15,
    "acd": 2.99,
    "lt": 4.72,
    "k1": 43.32,
    "k2": 43.55,
    "cyl": -0.23,
    "Iol-formula": "Hoffer Q",
    "iol_power": 22.71,
    "Iol": 22.5,
    "ref": 0.14,
    "bcva": 6,
    "Impl-iol": 22.5
  },
  {
    "al": 22.57,
    "acd": 2.83,
    "lt": 4.69,
    "k1": 45.92,
    "k2": 47.07,
    "cyl": -1.15,
    "Iol-formula": "srk/t",
    "iol_power": 20.79,
    "Iol": 21,
    "ref": -0.14,
    "bcva": 9,
    "Impl-iol": 21
  },
  {
    "al": 22.57,
    "acd": 2.83,
    "lt": 4.69,
    "k1": 45.92,
    "k2": 47.07,
    "cyl": -1.15,
    "Iol-formula": "barrett UII",
    "iol_power": 20.58,
    "Iol": 20.5,
    "ref": 0.06,
    "bcva": 9,
    "Impl-iol": 21
  },
  {
    "al": 22.57,
    "acd": 2.83,
    "lt": 4.69,
    "k1": 45.92,
    "k2": 47.07,
    "cyl": -1.15,
    "Iol-formula": "Holladay 1",
    "iol_power": 20.48,
    "Iol": 20.5,
    "ref": -0.01,
    "bcva": 9,
    "Impl-iol": 21
  },
  {
    "al": 22.57,
    "acd": 2.83,
    "lt": 4.69,
    "k1": 45.92,
    "k2": 47.07,
    "cyl": -1.15,
    "Iol-formula": "Hoffer Q",
    "iol_power": 20.28,
    "Iol": 20.5,
    "ref": -0.15,
    "bcva": 9,
    "Impl-iol": 21
  },
  {
    "al": 22.59,
    "acd": 2.73,
    "lt": 4.78,
    "k1": 45.61,
    "k2": 47.14,
    "cyl": -1.53,
    "Iol-formula": "srk/t",
    "iol_power": 20.85,
    "Iol": 21,
    "ref": -0.1,
    "bcva": 9,
    "Impl-iol": 21
  },
  {
    "al": 22.59,
    "acd": 2.73,
    "lt": 4.78,
    "k1": 45.61,
    "k2": 47.14,
    "cyl": -1.53,
    "Iol-formula": "barrett UII",
    "iol_power": 20.65,
    "Iol": 20.5,
    "ref": 0.1,
    "bcva": 9,
    "Impl-iol": 21
  },
  {
    "al": 22.59,
    "acd": 2.73,
    "lt": 4.78,
    "k1": 45.61,
    "k2": 47.14,
    "cyl": -1.53,
    "Iol-formula": "Holladay 1",
    "iol_power": 20.55,
    "Iol": 20.5,
    "ref": 0.04,
    "bcva": 9,
    "Impl-iol": 21
  },
  {
    "al": 22.59,
    "acd": 2.73,
    "lt": 4.78,
    "k1": 45.61,
    "k2": 47.14,
    "cyl": -1.53,
    "Iol-formula": "Hoffer Q",
    "iol_power": 20.36,
    "Iol": 20.5,
    "ref": -0.09,
    "bcva": 9,
    "Impl-iol": 21
  },
  {
    "al": 22.16,
    "acd": 2.65,
    "lt": 4.94,
    "k1": 42.35,
    "k2": 42.67,
    "cyl": -0.32,
    "Iol-formula": "srk/t",
    "iol_power": 25.77,
    "Iol": 26,
    "ref": -0.17,
    "bcva": 9,
    "Impl-iol": 26
  },
  {
    "al": 22.16,
    "acd": 2.65,
    "lt": 4.94,
    "k1": 42.35,
    "k2": 42.67,
    "cyl": -0.32,
    "Iol-formula": "barrett UII",
    "iol_power": 26.27,
    "Iol": 26.5,
    "ref": -0.18,
    "bcva": 9,
    "Impl-iol": 26
  },
  {
    "al": 22.16,
    "acd": 2.65,
    "lt": 4.94,
    "k1": 42.35,
    "k2": 42.67,
    "cyl": -0.32,
    "Iol-formula": "Holladay 1",
    "iol_power": 26.2,
    "Iol": 26,
    "ref": 0.15,
    "bcva": 9,
    "Impl-iol": 26
  },
  {
    "al": 22.16,
    "acd": 2.65,
    "lt": 4.94,
    "k1": 42.35,
    "k2": 42.67,
    "cyl": -0.32,
    "Iol-formula": "Hoffer Q",
    "iol_power": 26.5,
    "Iol": 26.5,
    "ref": 0,
    "bcva": 9,
    "Impl-iol": 26
  },
  {
    "al": 22.08,
    "acd": 2.63,
    "lt": 4.95,
    "k1": 41.62,
    "k2": 42.88,
    "cyl": -1.26,
    "Iol-formula": "srk/t",
    "iol_power": 26.29,
    "Iol": 26.5,
    "ref": -0.16,
    "bcva": 9,
    "Impl-iol": 27
  },
  {
    "al": 22.08,
    "acd": 2.63,
    "lt": 4.95,
    "k1": 41.62,
    "k2": 42.88,
    "cyl": -1.26,
    "Iol-formula": "barrett UII",
    "iol_power": 27.01,
    "Iol": 27,
    "ref": 0.01,
    "bcva": 9,
    "Impl-iol": 27
  },
  {
    "al": 22.08,
    "acd": 2.63,
    "lt": 4.95,
    "k1": 41.62,
    "k2": 42.88,
    "cyl": -1.26,
    "Iol-formula": "Holladay 1",
    "iol_power": 26.78,
    "Iol": 27,
    "ref": -0.16,
    "bcva": 9,
    "Impl-iol": 27
  },
  {
    "al": 22.08,
    "acd": 2.63,
    "lt": 4.95,
    "k1": 41.62,
    "k2": 42.88,
    "cyl": -1.26,
    "Iol-formula": "Hoffer Q",
    "iol_power": 27.11,
    "Iol": 27,
    "ref": 0.08,
    "bcva": 9,
    "Impl-iol": 27
  },
  {
    "al": 22.5,
    "acd": 2.75,
    "lt": 4.47,
    "k1": 44.53,
    "k2": 45.92,
    "cyl": -1.39,
    "Iol-formula": "srk/t",
    "iol_power": 22.9,
    "Iol": 23,
    "ref": -0.06,
    "bcva": 6,
    "Impl-iol": 22.5
  },
  {
    "al": 22.5,
    "acd": 2.75,
    "lt": 4.47,
    "k1": 44.53,
    "k2": 45.92,
    "cyl": -1.39,
    "Iol-formula": "barrett UII",
    "iol_power": 22.46,
    "Iol": 22.5,
    "ref": -0.03,
    "bcva": 6,
    "Impl-iol": 22.5
  },
  {
    "al": 22.5,
    "acd": 2.75,
    "lt": 4.47,
    "k1": 44.53,
    "k2": 45.92,
    "cyl": -1.39,
    "Iol-formula": "Holladay 1",
    "iol_power": 22.76,
    "Iol": 23,
    "ref": -0.16,
    "bcva": 6,
    "Impl-iol": 22.5
  },
  {
    "al": 22.5,
    "acd": 2.75,
    "lt": 4.47,
    "k1": 44.53,
    "k2": 45.92,
    "cyl": -1.39,
    "Iol-formula": "Hoffer Q",
    "iol_power": 22.79,
    "Iol": 23,
    "ref": -0.14,
    "bcva": 6,
    "Impl-iol": 22.5
  },
  {
    "al": 23.02,
    "acd": 2.74,
    "lt": 4.93,
    "k1": 41.62,
    "k2": 42.13,
    "cyl": -0.51,
    "Iol-formula": "srk/t",
    "iol_power": 24.94,
    "Iol": 25,
    "ref": -0.04,
    "bcva": 6,
    "Impl-iol": 25
  },
  {
    "al": 23.02,
    "acd": 2.74,
    "lt": 4.93,
    "k1": 41.62,
    "k2": 42.13,
    "cyl": -0.51,
    "Iol-formula": "barrett UII",
    "iol_power": 25.05,
    "Iol": 25,
    "ref": 0.04,
    "bcva": 6,
    "Impl-iol": 25
  },
  {
    "al": 23.02,
    "acd": 2.74,
    "lt": 4.93,
    "k1": 41.62,
    "k2": 42.13,
    "cyl": -0.51,
    "Iol-formula": "Holladay 1",
    "iol_power": 25.58,
    "Iol": 25.5,
    "ref": 0.06,
    "bcva": 6,
    "Impl-iol": 25
  },
  {
    "al": 23.02,
    "acd": 2.74,
    "lt": 4.93,
    "k1": 41.62,
    "k2": 42.13,
    "cyl": -0.51,
    "Iol-formula": "Hoffer Q",
    "iol_power": 25.92,
    "Iol": 26,
    "ref": -0.05,
    "bcva": 6,
    "Impl-iol": 25
  },
  {
    "al": 22.78,
    "acd": 2.91,
    "lt": 4.72,
    "k1": 42.4,
    "k2": 42.78,
    "cyl": -0.38,
    "Iol-formula": "srk/t",
    "iol_power": 24.99,
    "Iol": 25,
    "ref": -0.01,
    "bcva": 6,
    "Impl-iol": 25
  },
  {
    "al": 22.78,
    "acd": 2.91,
    "lt": 4.72,
    "k1": 42.4,
    "k2": 42.78,
    "cyl": -0.38,
    "Iol-formula": "barrett UII",
    "iol_power": 25.22,
    "Iol": 25,
    "ref": 0.16,
    "bcva": 6,
    "Impl-iol": 25
  },
  {
    "al": 22.78,
    "acd": 2.91,
    "lt": 4.72,
    "k1": 42.4,
    "k2": 42.78,
    "cyl": -0.38,
    "Iol-formula": "Holladay 1",
    "iol_power": 25.59,
    "Iol": 25.5,
    "ref": 0.06,
    "bcva": 6,
    "Impl-iol": 25
  },
  {
    "al": 22.78,
    "acd": 2.91,
    "lt": 4.72,
    "k1": 42.4,
    "k2": 42.78,
    "cyl": -0.38,
    "Iol-formula": "Hoffer Q",
    "iol_power": 25.87,
    "Iol": 26,
    "ref": -0.09,
    "bcva": 6,
    "Impl-iol": 25
  },
  {
    "al": 23.81,
    "acd": 3.16,
    "lt": 4.36,
    "k1": 40.96,
    "k2": 41.56,
    "cyl": -0.6,
    "Iol-formula": "srk/t",
    "iol_power": 22.84,
    "Iol": 23,
    "ref": -0.12,
    "bcva": 9,
    "Impl-iol": 23.5
  },
  {
    "al": 23.81,
    "acd": 3.16,
    "lt": 4.36,
    "k1": 40.96,
    "k2": 41.56,
    "cyl": -0.6,
    "Iol-formula": "barrett UII",
    "iol_power": 22.89,
    "Iol": 23,
    "ref": -0.08,
    "bcva": 9,
    "Impl-iol": 23.5
  },
  {
    "al": 23.81,
    "acd": 3.16,
    "lt": 4.36,
    "k1": 40.96,
    "k2": 41.56,
    "cyl": -0.6,
    "Iol-formula": "Holladay 1",
    "iol_power": 23.06,
    "Iol": 23,
    "ref": 0.04,
    "bcva": 9,
    "Impl-iol": 23.5
  },
  {
    "al": 23.81,
    "acd": 3.16,
    "lt": 4.36,
    "k1": 40.96,
    "k2": 41.56,
    "cyl": -0.6,
    "Iol-formula": "Hoffer Q",
    "iol_power": 23.33,
    "Iol": 23.5,
    "ref": -0.12,
    "bcva": 9,
    "Impl-iol": 23.5
  },
  {
    "al": 23.57,
    "acd": 2.92,
    "lt": 4.77,
    "k1": 41.51,
    "k2": 42.35,
    "cyl": -0.84,
    "Iol-formula": "srk/t",
    "iol_power": 22.86,
    "Iol": 23,
    "ref": -0.1,
    "bcva": 9,
    "Impl-iol": 23
  },
  {
    "al": 23.57,
    "acd": 2.92,
    "lt": 4.77,
    "k1": 41.51,
    "k2": 42.35,
    "cyl": -0.84,
    "Iol-formula": "barrett UII",
    "iol_power": 22.56,
    "Iol": 22.5,
    "ref": 0.04,
    "bcva": 9,
    "Impl-iol": 23
  },
  {
    "al": 23.57,
    "acd": 2.92,
    "lt": 4.77,
    "k1": 41.51,
    "k2": 42.35,
    "cyl": -0.84,
    "Iol-formula": "Holladay 1",
    "iol_power": 23.05,
    "Iol": 23,
    "ref": 0.03,
    "bcva": 9,
    "Impl-iol": 23
  },
  {
    "al": 23.57,
    "acd": 2.92,
    "lt": 4.77,
    "k1": 41.51,
    "k2": 42.35,
    "cyl": -0.84,
    "Iol-formula": "Hoffer Q",
    "iol_power": 23.25,
    "Iol": 23,
    "ref": 0.17,
    "bcva": 9,
    "Impl-iol": 23
  },
  {
    "al": 22.87,
    "acd": 2.85,
    "lt": 4.51,
    "k1": 44,
    "k2": 44.58,
    "cyl": -0.58,
    "Iol-formula": "srk/t",
    "iol_power": 22.63,
    "Iol": 22.5,
    "ref": 0.09,
    "bcva": 9,
    "Impl-iol": 22.5
  },
  {
    "al": 22.87,
    "acd": 2.85,
    "lt": 4.51,
    "k1": 44,
    "k2": 44.58,
    "cyl": -0.58,
    "Iol-formula": "barrett UII",
    "iol_power": 22.44,
    "Iol": 22.5,
    "ref": -0.04,
    "bcva": 9,
    "Impl-iol": 22.5
  },
  {
    "al": 22.87,
    "acd": 2.85,
    "lt": 4.51,
    "k1": 44,
    "k2": 44.58,
    "cyl": -0.58,
    "Iol-formula": "Holladay 1",
    "iol_power": 22.59,
    "Iol": 22.5,
    "ref": 0.06,
    "bcva": 9,
    "Impl-iol": 22.5
  },
  {
    "al": 22.87,
    "acd": 2.85,
    "lt": 4.51,
    "k1": 44,
    "k2": 44.58,
    "cyl": -0.58,
    "Iol-formula": "Hoffer Q",
    "iol_power": 22.6,
    "Iol": 22.5,
    "ref": 0.07,
    "bcva": 9,
    "Impl-iol": 22.5
  },
  {
    "al": 23.77,
    "acd": 2.57,
    "lt": 4.82,
    "k1": 41.5,
    "k2": 41.93,
    "cyl": -0.42,
    "Iol-formula": "srk/t",
    "iol_power": 22.47,
    "Iol": 22.5,
    "ref": -0.02,
    "bcva": 9,
    "Impl-iol": 23
  },
  {
    "al": 23.77,
    "acd": 2.57,
    "lt": 4.82,
    "k1": 41.5,
    "k2": 41.93,
    "cyl": -0.42,
    "Iol-formula": "barrett UII",
    "iol_power": 22.33,
    "Iol": 22.5,
    "ref": -0.13,
    "bcva": 9,
    "Impl-iol": 23
  },
  {
    "al": 23.77,
    "acd": 2.57,
    "lt": 4.82,
    "k1": 41.5,
    "k2": 41.93,
    "cyl": -0.42,
    "Iol-formula": "Holladay 1",
    "iol_power": 22.65,
    "Iol": 22.5,
    "ref": 0.1,
    "bcva": 9,
    "Impl-iol": 23
  },
  {
    "al": 23.77,
    "acd": 2.57,
    "lt": 4.82,
    "k1": 41.5,
    "k2": 41.93,
    "cyl": -0.42,
    "Iol-formula": "Hoffer Q",
    "iol_power": 22.85,
    "Iol": 23,
    "ref": -0.1,
    "bcva": 9,
    "Impl-iol": 23
  },
  {
    "al": 22.05,
    "acd": 3.27,
    "lt": 3.79,
    "k1": 45.18,
    "k2": 46.11,
    "cyl": -0.93,
    "Iol-formula": "srk/t",
    "iol_power": 23.76,
    "Iol": 24,
    "ref": -0.16,
    "bcva": 6,
    "Impl-iol": 24
  },
  {
    "al": 22.05,
    "acd": 3.27,
    "lt": 3.79,
    "k1": 45.18,
    "k2": 46.11,
    "cyl": -0.93,
    "Iol-formula": "barrett UII",
    "iol_power": 23.75,
    "Iol": 23.5,
    "ref": 0.17,
    "bcva": 6,
    "Impl-iol": 24
  },
  {
    "al": 22.05,
    "acd": 3.27,
    "lt": 3.79,
    "k1": 45.18,
    "k2": 46.11,
    "cyl": -0.93,
    "Iol-formula": "Holladay 1",
    "iol_power": 24.08,
    "Iol": 24,
    "ref": 0.05,
    "bcva": 6,
    "Impl-iol": 24
  },
  {
    "al": 22.05,
    "acd": 3.27,
    "lt": 3.79,
    "k1": 45.18,
    "k2": 46.11,
    "cyl": -0.93,
    "Iol-formula": "Hoffer Q",
    "iol_power": 24.15,
    "Iol": 24,
    "ref": 0.1,
    "bcva": 6,
    "Impl-iol": 24
  },
  {
    "al": 24.48,
    "acd": 3.13,
    "lt": 4.75,
    "k1": 41.41,
    "k2": 41.62,
    "cyl": -0.21,
    "Iol-formula": "srk/t",
    "iol_power": 20.06,
    "Iol": 20,
    "ref": 0.04,
    "bcva": 9,
    "Impl-iol": 20.5
  },
  {
    "al": 24.48,
    "acd": 3.13,
    "lt": 4.75,
    "k1": 41.41,
    "k2": 41.62,
    "cyl": -0.21,
    "Iol-formula": "barrett UII",
    "iol_power": 20.24,
    "Iol": 20,
    "ref": 0.17,
    "bcva": 9,
    "Impl-iol": 20.5
  },
  {
    "al": 24.48,
    "acd": 3.13,
    "lt": 4.75,
    "k1": 41.41,
    "k2": 41.62,
    "cyl": -0.21,
    "Iol-formula": "Holladay 1",
    "iol_power": 20.25,
    "Iol": 20.5,
    "ref": -0.17,
    "bcva": 9,
    "Impl-iol": 20.5
  },
  {
    "al": 24.48,
    "acd": 3.13,
    "lt": 4.75,
    "k1": 41.41,
    "k2": 41.62,
    "cyl": -0.21,
    "Iol-formula": "Hoffer Q",
    "iol_power": 20.33,
    "Iol": 20.5,
    "ref": -0.12,
    "bcva": 9,
    "Impl-iol": 20.5
  },
  {
    "al": 23.88,
    "acd": 3.46,
    "lt": 4.23,
    "k1": 44.18,
    "k2": 44.29,
    "cyl": -0.11,
    "Iol-formula": "srk/t",
    "iol_power": 19.44,
    "Iol": 19.5,
    "ref": -0.04,
    "bcva": 6,
    "Impl-iol": 20.5
  },
  {
    "al": 23.88,
    "acd": 3.46,
    "lt": 4.23,
    "k1": 44.18,
    "k2": 44.29,
    "cyl": -0.11,
    "Iol-formula": "barrett UII",
    "iol_power": 19.37,
    "Iol": 19.5,
    "ref": -0.09,
    "bcva": 6,
    "Impl-iol": 20.5
  },
  {
    "al": 23.88,
    "acd": 3.46,
    "lt": 4.23,
    "k1": 44.18,
    "k2": 44.29,
    "cyl": -0.11,
    "Iol-formula": "Holladay 1",
    "iol_power": 19.44,
    "Iol": 19.5,
    "ref": -0.04,
    "bcva": 6,
    "Impl-iol": 20.5
  },
  {
    "al": 23.88,
    "acd": 3.46,
    "lt": 4.23,
    "k1": 44.18,
    "k2": 44.29,
    "cyl": -0.11,
    "Iol-formula": "Hoffer Q",
    "iol_power": 19.37,
    "Iol": 19.5,
    "ref": -0.09,
    "bcva": 6,
    "Impl-iol": 20.5
  },
  {
    "al": 23.69,
    "acd": 3.33,
    "lt": 4.48,
    "k1": 44.35,
    "k2": 44.94,
    "cyl": 0.1,
    "Iol-formula": "srk/t",
    "iol_power": 19.59,
    "Iol": 19.5,
    "ref": 0.06,
    "bcva": 6,
    "Impl-iol": 19.5
  },
  {
    "al": 23.69,
    "acd": 3.33,
    "lt": 4.48,
    "k1": 44.35,
    "k2": 44.94,
    "cyl": -0.59,
    "Iol-formula": "barrett UII",
    "iol_power": 19.52,
    "Iol": 19.5,
    "ref": 0.01,
    "bcva": 6,
    "Impl-iol": 19.5
  },
  {
    "al": 23.69,
    "acd": 3.33,
    "lt": 4.48,
    "k1": 44.35,
    "k2": 44.94,
    "cyl": -0.59,
    "Iol-formula": "Holladay 1",
    "iol_power": 19.59,
    "Iol": 19.5,
    "ref": 0.06,
    "bcva": 6,
    "Impl-iol": 19.5
  },
  {
    "al": 23.69,
    "acd": 3.33,
    "lt": 4.48,
    "k1": 44.35,
    "k2": 44.94,
    "cyl": -0.59,
    "Iol-formula": "Hoffer Q",
    "iol_power": 19.52,
    "Iol": 19.5,
    "ref": 0.01,
    "bcva": 6,
    "Impl-iol": 19.5
  },
  {
    "al": 24.06,
    "acd": 3.16,
    "lt": 4.44,
    "k1": 42.35,
    "k2": 43.05,
    "cyl": -0.7,
    "Iol-formula": "srk/t",
    "iol_power": 20.55,
    "Iol": 20.5,
    "ref": 0.04,
    "bcva": 9,
    "Impl-iol": 20.5
  },
  {
    "al": 24.06,
    "acd": 3.16,
    "lt": 4.44,
    "k1": 42.35,
    "k2": 43.05,
    "cyl": -0.7,
    "Iol-formula": "barrett UII",
    "iol_power": 20.48,
    "Iol": 20.5,
    "ref": -0.02,
    "bcva": 9,
    "Impl-iol": 20.5
  },
  {
    "al": 24.06,
    "acd": 3.16,
    "lt": 4.44,
    "k1": 42.35,
    "k2": 43.05,
    "cyl": -0.7,
    "Iol-formula": "Holladay 1",
    "iol_power": 20.54,
    "Iol": 20.5,
    "ref": 0.03,
    "bcva": 9,
    "Impl-iol": 20.5
  },
  {
    "al": 24.06,
    "acd": 3.16,
    "lt": 4.44,
    "k1": 42.35,
    "k2": 43.05,
    "cyl": -0.7,
    "Iol-formula": "Hoffer Q",
    "iol_power": 20.53,
    "Iol": 20.5,
    "ref": 0.02,
    "bcva": 9,
    "Impl-iol": 20.5
  },
  {
    "al": 23.48,
    "acd": 3.24,
    "lt": 4.49,
    "k1": 43.21,
    "k2": 43.32,
    "cyl": -0.11,
    "Iol-formula": "srk/t",
    "iol_power": 21.73,
    "Iol": 21.5,
    "ref": 0.16,
    "bcva": 9,
    "Impl-iol": 22
  },
  {
    "al": 23.48,
    "acd": 3.24,
    "lt": 4.49,
    "k1": 43.21,
    "k2": 43.32,
    "cyl": -0.11,
    "Iol-formula": "barrett UII",
    "iol_power": 21.9,
    "Iol": 22,
    "ref": -0.07,
    "bcva": 9,
    "Impl-iol": 22
  },
  {
    "al": 23.48,
    "acd": 3.24,
    "lt": 4.49,
    "k1": 43.21,
    "k2": 43.32,
    "cyl": -0.11,
    "Iol-formula": "Holladay 1",
    "iol_power": 21.73,
    "Iol": 21.5,
    "ref": 0.16,
    "bcva": 9,
    "Impl-iol": 22
  },
  {
    "al": 23.48,
    "acd": 3.24,
    "lt": 4.49,
    "k1": 43.21,
    "k2": 43.32,
    "cyl": -0.11,
    "Iol-formula": "Hoffer Q",
    "iol_power": 21.9,
    "Iol": 22,
    "ref": -0.07,
    "bcva": 9,
    "Impl-iol": 22
  },
  {
    "al": 23.71,
    "acd": 3.46,
    "lt": 4.31,
    "k1": 42.72,
    "k2": 43.1,
    "cyl": -0.38,
    "Iol-formula": "srk/t",
    "iol_power": 21.52,
    "Iol": 21.5,
    "ref": 0.01,
    "bcva": 6,
    "Impl-iol": 22
  },
  {
    "al": 23.71,
    "acd": 3.46,
    "lt": 4.31,
    "k1": 42.72,
    "k2": 43.1,
    "cyl": -0.38,
    "Iol-formula": "barrett UII",
    "iol_power": 21.62,
    "Iol": 21.5,
    "ref": 0.08,
    "bcva": 6,
    "Impl-iol": 22
  },
  {
    "al": 23.71,
    "acd": 3.46,
    "lt": 4.31,
    "k1": 42.72,
    "k2": 43.1,
    "cyl": -0.38,
    "Iol-formula": "Holladay 1",
    "iol_power": 21.44,
    "Iol": 21.5,
    "ref": -0.04,
    "bcva": 6,
    "Impl-iol": 22
  },
  {
    "al": 23.71,
    "acd": 3.46,
    "lt": 4.31,
    "k1": 42.72,
    "k2": 43.1,
    "cyl": -0.38,
    "Iol-formula": "Hoffer Q",
    "iol_power": 21.42,
    "Iol": 21.5,
    "ref": -0.06,
    "bcva": 6,
    "Impl-iol": 22
  },
  {
    "al": 24.02,
    "acd": 3.33,
    "lt": 4.47,
    "k1": 42.19,
    "k2": 43.95,
    "cyl": -1.76,
    "Iol-formula": "srk/t",
    "iol_power": 19.81,
    "Iol": 20,
    "ref": -0.13,
    "bcva": 9,
    "Impl-iol": 20
  },
  {
    "al": 24.02,
    "acd": 3.33,
    "lt": 4.47,
    "k1": 42.19,
    "k2": 43.95,
    "cyl": -1.76,
    "Iol-formula": "barrett UII",
    "iol_power": 19.86,
    "Iol": 20,
    "ref": -0.1,
    "bcva": 9,
    "Impl-iol": 20
  },
  {
    "al": 24.02,
    "acd": 3.33,
    "lt": 4.47,
    "k1": 42.19,
    "k2": 43.95,
    "cyl": -1.76,
    "Iol-formula": "Holladay 1",
    "iol_power": 19.71,
    "Iol": 19.5,
    "ref": 0.14,
    "bcva": 9,
    "Impl-iol": 20
  },
  {
    "al": 24.02,
    "acd": 3.33,
    "lt": 4.47,
    "k1": 42.19,
    "k2": 43.95,
    "cyl": -1.76,
    "Iol-formula": "Hoffer Q",
    "iol_power": 19.79,
    "Iol": 20,
    "ref": -0.14,
    "bcva": 9,
    "Impl-iol": 20
  },
  {
    "al": 20.49,
    "acd": 3.75,
    "lt": 3.11,
    "k1": 43.21,
    "k2": 44.41,
    "cyl": -1.2,
    "Iol-formula": "srk/t",
    "iol_power": 32.28,
    "Iol": 32.5,
    "ref": -0.16,
    "bcva": 6,
    "Impl-iol": 33
  },
  {
    "al": 20.72,
    "acd": 3.61,
    "lt": 3.28,
    "k1": 44.12,
    "k2": 44.88,
    "cyl": -0.76,
    "Iol-formula": "srk/t",
    "iol_power": 30.66,
    "Iol": 30.5,
    "ref": 0.11,
    "bcva": 6,
    "Impl-iol": 31
  }
];

export default sampleData;