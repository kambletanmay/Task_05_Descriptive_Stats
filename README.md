# Task 05: Descriptive Statistics and Large Language Models

## 📋 Project Overview

This research project explores how effectively Large Language Models (LLMs) can analyze and answer natural language questions about sports statistics data. Using the **2025 Syracuse Women's Lacrosse** season statistics, I tested Claude's ability to handle questions ranging from simple factual queries to complex strategic analysis.

### Research Objective
> Can LLMs correctly interpret, calculate, and provide insights from structured sports data when asked natural language questions?

---

## 📊 Dataset

**Source:** [Syracuse University Athletics - Women's Lacrosse](https://cuse.com/sports/womens-lacrosse)

**Season:** 2025 (as of May 12, 2025)

**Data Includes:**
- Game-by-game results (19 games)
- Individual player statistics (goals, assists, shots, ground balls, etc.)
- Team statistics (shots, saves, turnovers, clears, etc.)
- Goalie performance metrics

> ⚠️ **Note:** Per assignment requirements, the dataset file is NOT included in this repository.

---

## 🔬 Methodology

### Approach
1. Provided the complete season statistics PDF to Claude (LLM)
2. Asked questions across three difficulty levels
3. Validated LLM responses against manual calculations
4. Documented prompt engineering techniques required for complex questions

### Question Categories

| Category | Description | Expected LLM Performance |
|----------|-------------|-------------------------|
| **Simple** | Direct factual lookups | High accuracy |
| **Intermediate** | Requires calculations | Moderate accuracy |
| **Complex** | Requires defining metrics & judgment | Requires prompt engineering |

---

## 📝 Questions Tested & Results

### ✅ Simple Questions (Factual)

| Question | LLM Answer | Validated | 
|----------|------------|-----------|
| How many games did Syracuse play this season? | 19 games | ✅ Correct |
| What was their overall win-loss record? | 10-9 | ✅ Correct |
| Who scored the most goals on the team? | Emma Muchnick (34 goals) | ✅ Correct |
| Which game had the highest attendance? | Notre Dame - 3,622 fans | ✅ Correct |

**Observation:** Simple factual questions were answered correctly on the first attempt without any prompt engineering needed.

---

### ✅ Intermediate Questions (Calculations)

| Question | LLM Answer | Validated |
|----------|------------|-----------|
| What was the team's average goals per game? | 12.37 (235 ÷ 19) | ✅ Correct |
| What was the goalie's save percentage? | 43.4% (162 saves / 373 shots faced) | ✅ Correct |
| Did Syracuse score more in 1st or 2nd half? | 1st half: 139 goals, 2nd half: 95 goals | ✅ Correct |
| Which player had the best shot percentage? | Gracie Britton (48.8%) | ✅ Correct |

**Observation:** The LLM correctly performed calculations and comparisons. It showed work and methodology, making validation straightforward.

---

### 🔶 Complex Questions (Analytical)

#### Question 1: "Who was the most efficient offensive player?"

**LLM Response:** 
- Defined efficiency as **shot percentage** (goals ÷ shots)
- Identified **Gracie Britton (48.8%)** as most efficient overall
- Identified **Emma Muchnick (47.9%)** as most efficient among high-volume scorers (30+ goals)

**Prompt Engineering Required:** None - LLM proactively defined the metric

---

#### Question 2: "If the coach wanted to win 2 more games, should they focus on offense or defense?"

**LLM Response:** 
> **Recommendation: Focus on DEFENSE**

**Reasoning Provided:**
1. Syracuse had 3 one-goal losses (Clemson 8-9, Johns Hopkins 13-14 OT, Yale 8-9)
2. Team already outscores opponents overall (235 vs 221)
3. 4th quarter was weakest defensive period (allowed 59 goals vs scored 47)
4. Improving late-game defense could flip close losses to wins

**Prompt Engineering Required:** None - LLM analyzed close games and identified patterns independently

---

## 📈 Visualizations

The LLM generated an interactive dashboard (`index.html`) featuring:

1. **Season Summary Cards** - Record, goals scored/allowed, save percentage
2. **Top 10 Scorers Chart** - Horizontal bar chart showing goals and assists
3. **Goals by Quarter** - Comparison revealing 4th quarter defensive weakness
4. **Season Timeline** - Win/loss margins throughout the season

### 🌐 [View Live Dashboard](https://kambletanmay.github.io/Task_05_Descriptive_Stats/)

---

## 🎯 Key Findings

### What the LLM Did Well ✅
- **Accurate data extraction** - Correctly read all values from the PDF
- **Mathematical calculations** - Averages, percentages, totals computed correctly
- **Pattern recognition** - Identified 4th quarter weakness without prompting
- **Strategic thinking** - Connected close losses to defensive improvements
- **Visualization** - Generated working Chart.js code on first attempt

### Challenges & Limitations ⚠️
- Complex questions benefit from defining metrics upfront
- Very open-ended questions ("who should be developed?") require establishing criteria
- LLM occasionally needed clarification on ambiguous terms

### Prompt Engineering Techniques Used
1. **Explicit metric definition** - "Calculate efficiency as goals divided by shots"
2. **Scope narrowing** - "Among players with 10+ goals..."
3. **Multi-step requests** - "First identify close losses, then analyze what went wrong"

---

## 📁 Repository Structure

```
Task_05_Descriptive_Stats/
│
├── index.html                 # Interactive visualization dashboard
├── README.md                  # This documentation file
│
├── prompts/
│   ├── simple_questions.md        # Simple Q&A transcripts
│   ├── intermediate_questions.md  # Calculation-based Q&A
│   └── complex_questions.md       # Analytical Q&A with reasoning
│
├── visualizations/
│   └── lacrosse_viz.jsx          # React component (alternate version)
│
└── analysis/
    └── llm_performance_summary.md # Summary of LLM accuracy
```

---

## 🛠️ Tools & Technologies

| Tool | Purpose |
|------|---------|
| **Claude (Anthropic)** | Large Language Model for analysis |
| **Chart.js** | JavaScript charting library |
| **GitHub Pages** | Hosting visualization |

---

## 📚 Lessons Learned

1. **LLMs excel at structured data** - When given clean tabular data, accuracy is high
2. **Define your metrics** - For subjective questions, establish criteria first
3. **Validate everything** - Even correct-looking answers should be verified
4. **Visualizations work** - LLMs can generate functional chart code directly
5. **Context matters** - Providing the full dataset context improves accuracy

---

## 🔗 References

- [Syracuse Women's Lacrosse Statistics](https://cuse.com/sports/womens-lacrosse)
- [Claude AI by Anthropic](https://www.anthropic.com)
- [Chart.js Documentation](https://www.chartjs.org/docs/)

---

## 👤 Author

**[Tanmay Kamble]**  
Syracuse University  
Research Task 05 - Descriptive Statistics & LLMs  
Summer 2025

---

## 📧 Contact

For questions about this research task, contact: **trkamble@syr.edu**

---
