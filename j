<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Vessel Management</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Admin Panel - Vessel Management</h1>
    
    <!-- Buttons -->
    <button id="refreshListBtn">Refresh List</button>
    <button id="addVesselBtn">Add Vessel</button>
    <button id="deleteVesselBtn">Delete Vessel</button>
    
    <!-- Options -->
    <label for="sortByOption">Sort by:</label>
    <select id="sortByOption">
        <option value="name">Name</option>
        <option value="type">Type</option>
        <option value="price">Price</option>
    </select>

    <label for="filterByOption">Filter by:</label>
    <select id="filterByOption">
        <option value="all">All</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        <!-- Add more filter options as needed -->
    </select>
    
    <!-- Container for displaying vessel list -->
    <div id="vesselList"></div>

    <!-- JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
