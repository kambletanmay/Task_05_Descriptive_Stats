# Simple Questions - Factual Lookups

## Overview
These questions test the LLM's ability to extract direct facts from the dataset without requiring calculations or analysis.

**Expected Performance:** High accuracy on first attempt

---

## Question 1: How many games did Syracuse play this season?

### Prompt
```
How many games did Syracuse play this season?
```

### LLM Response
Syracuse played **19 games** this season.

### Validation
✅ **Correct**

**Evidence:** 
- The schedule shows 19 dated matchups from February 7 through May 11
- Player statistics show "GP" (Games Played) of 19 for most starters
- Team record shows 10-9 (10 + 9 = 19 games)

---

## Question 2: What was their overall win-loss record?

### Prompt
```
What was their overall win-loss record?
```

### LLM Response
Syracuse's overall record was **10-9** (10 wins, 9 losses).

### Validation
✅ **Correct**

**Evidence:**
- Record table shows: ALL GAMES → OVERALL: 10-9
- Conference record: 5-4
- Non-conference record: 5-5
- Home: 5-4, Away: 4-4, Neutral: 1-1

---

## Question 3: Who scored the most goals on the team?

### Prompt
```
Who scored the most goals on the team?
```

### LLM Response
**Emma Muchnick (#5)** scored the most goals with **34 goals** in 19 games.

### Validation
✅ **Correct**

**Evidence from player stats (Goals column):**
| Rank | Player | Goals |
|------|--------|-------|
| 1 | Emma Muchnick | 34 |
| 2 | Caroline Trinkaus | 32 |
| 3 | Emma Ward | 30 |
| 4 | Alexa Vogelman | 21 |
| 5 | Mileena Cotter | 21 |

---

## Question 4: Which game had the highest attendance?

### Prompt
```
Which game had the highest attendance?
```

### LLM Response
The game with the highest attendance was **March 23 vs #20 Notre Dame** with **3,622 fans**. Syracuse won that game 12-11.

### Validation
✅ **Correct**

**Top 5 Attendance Games:**
| Date | Opponent | Attendance | Result |
|------|----------|------------|--------|
| Mar 23 | #20 Notre Dame | 3,622 | W 12-11 |
| Mar 01 | #14 Clemson | 2,899 | L 8-9 |
| Mar 29 | #11 Virginia | 2,736 | W 13-12 |
| Feb 18 | Cornell | 2,214 | W 18-10 |
| Mar 07 | #7 Stanford | 2,165 | W 14-13 |

---

## Question 5: Who was the starting goalie?

### Prompt
```
Who was the starting goalie?
```

### LLM Response
**Daniella Guyette (#0)** was the starting goalie. She played all 19 games with a record of 10-9-0.

### Validation
✅ **Correct**

**Evidence:**
| Goalie | GP | Minutes | Record |
|--------|-----|---------|--------|
| Daniella Guyette | 19 | 1114:51 | 10-9-0 |
| Allie Hanlon | 3 | 26:49 | 0-0-0 |

---

## Question 6: What was the largest margin of victory?

### Prompt
```
What was the largest margin of victory?
```

### LLM Response
The largest margin of victory was **12 goals**, which occurred in two games:
1. **Feb 7 vs UALBANY** - Won 21-9 (12-goal margin)
2. **Apr 5 at California** - Won 18-6 (12-goal margin)

### Validation
✅ **Correct**

**All Wins by Margin:**
| Date | Opponent | Score | Margin |
|------|----------|-------|--------|
| Feb 07 | UALBANY | 21-9 | +12 |
| Apr 05 | California | 18-6 | +12 |
| Feb 18 | CORNELL | 18-10 | +8 |
| Feb 15 | Maryland | 15-9 | +6 |
| Mar 15 | Pitt | 17-11 | +6 |
| May 09 | Brown | 15-9 | +6 |

---

## Summary

| Question | LLM Answer | Status |
|----------|------------|--------|
| Games played | 19 | ✅ Correct |
| Win-loss record | 10-9 | ✅ Correct |
| Most goals | Emma Muchnick (34) | ✅ Correct |
| Highest attendance | Notre Dame (3,622) | ✅ Correct |
| Starting goalie | Daniella Guyette | ✅ Correct |
| Largest victory margin | 12 goals (twice) | ✅ Correct |

**Accuracy Rate: 100% (6/6)**

---

## Observations

- ✅ All simple factual questions were answered correctly on the first attempt
- ✅ No prompt engineering was required
- ✅ LLM correctly identified data directly from the PDF
- ✅ Additional context was provided without being asked (e.g., game results, dates)

---

*Document generated as part of Research Task 05 - Descriptive Statistics & LLMs*
