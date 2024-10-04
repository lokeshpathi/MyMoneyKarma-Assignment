const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const FinancialData = require("./Model");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false, // Not needed in Mongoose 6+
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

// Routes

/**
 * @route   POST /api/financial-data
 * @desc    Receive financial data and generate advice
 * @access  Public
 */
app.post("/api/financial-data", async (req, res) => {
  const { income, expenses, savings } = req.body;

  // Input validation
  if (income === undefined || expenses === undefined || savings === undefined) {
    return res
      .status(400)
      .json({ error: "Income, expenses, and savings are required." });
  }

  if (income < 0 || expenses < 0 || savings < 0) {
    return res
      .status(400)
      .json({
        error: "Income, expenses, and savings must be positive numbers.",
      });
  }

  // Generate advice based on financial data
  let advice = "";

  const savingsPercentage = (savings / income) * 100;
  const expensesPercentage = (expenses / income) * 100;

  if (savingsPercentage < 10) {
    advice +=
      "You should increase your savings to at least 10% of your income. ";
  }

  if (expensesPercentage > 80) {
    advice += "Consider reducing your expenses to below 80% of your income. ";
  }

  if (savingsPercentage >= 10 && expensesPercentage <= 80) {
    advice = "Great job! Your savings and expenses are well balanced.";
  }

  try {
    // Save to database
    const financialData = new FinancialData({
      income,
      expenses,
      savings,
      advice,
    });

    await financialData.save();

    res.status(201).json({ advice });
  } catch (error) {
    console.error("Error saving financial data:", error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

/**
 * @route   GET /api/financial-data/:id
 * @desc    Retrieve financial data by ID
 * @access  Public
 */
app.get("/api/financial-data/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const financialData = await FinancialData.findById(id);
    if (!financialData) {
      return res.status(404).json({ error: "Financial data not found." });
    }
    res.json(financialData);
  } catch (error) {
    console.error("Error retrieving financial data:", error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
