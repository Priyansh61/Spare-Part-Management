# Automated Spare Part Planning Tool for Xiaomi Aftersales

## Table of Contents
- [Overview](#overview)
- [Objectives](#objectives)
- [Technology Stack](#technology-stack)
- [System Design](#system-design)
    - [Database Schema](#database-schema)
    - [Flow](#flow)
- [Getting Started](#getting-started)
- [License](#license)

---

## Overview

This tool automates Spare Part Planning, Visibility, and Assignment across Xiaomi's aftersales operations, streamlining workflows for Planning Teams, Warehouses, Service Centers, and Customer Support.

**What Makes It Stand Out?**

- **Real-Time Inventory**: Dynamic stock checking across all WHs in India.
- **Predictive Analytics**: Uses historical data to forecast spare part requirements.
- **Cross-Compatibility**: Intelligent spare part mapping across different models.

---

## Objectives

- Ensure spare part visibility and availability.
- Facilitate accurate assignment against work orders.
- Improve customer experience by speeding up service and offering precise Turn Around Times (TAT).

---

## Technology Stack

- **Backend**: Java with Spring Boot Framework
- **Frontend**: ReactJS, Tailwind CSS
- **Database**: PostgreSQL

---

## System Design

### Database Schema

- **Products Table**: SKU_ID, Model_Name
- **Spare_Parts Table**: Part_SKU, Part_Name, Compatible_Model_SKUs
- **Service_Centers Table**: Center_ID, Zonal_WH, Current_Stock
- **Job_Sheets Table**: Sheet_ID, Customer_ID, Required_Parts, Courier_Details
- **Warehouses Table**: WH_ID, Zonal_Location, Stock_Details

### Flow

1. **Service Center**
    - Creates a job sheet and identifies required spare parts.
    - Checks `Current_Stock` in `Service_Centers Table`.
    - If the stock is present, delivers the order within 3 hours.
    - Else, notifies the planning team about the requirements and provides an estimate of 7 days to the customer.

2. **Planning Team**
    - Aggregates daily requirements and checks `Stock_Details` in `Warehouses Table`.
    - Requirements are sorted by date, and parts are automatically allocated to the nearest warehouse using an algorithm.
    - A dispatch plan is prepared and must be manually verified by the stock team before broadcasting to the respective WHs.
    - Updates the `Current_Stock` in `Service_Centers Table`.

3. **Warehouse Team**
    - Receives the material dispatch plan and updates `Stock_Details` in `Warehouses Table`.
    - Coordinates with the courier for pickup and delivery to the service center.
    - Updates `Courier_Details` in the `Job_Sheets Table`, and the customer is notified accordingly.
    - This allows customers to track the status of their orders.

4. **Customer Support**
    - Accesses `Job_Sheets Table` to address customer queries.
    - Customers can also log into the platform to check the status of their orders using the job sheet ID.

---

## Getting Started

```bash
# Clone repository and navigate
git clone [repo_url] && cd [project_dir]

# Backend setup
mvn install

# Frontend setup
cd frontend && npm install && npm start
```

## License

MIT License. See LICENSE for more information.