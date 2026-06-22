/**
 * Migration and Residency Data Module
 * Defines the structure for user migration information
 */

const MigrationData = {
    // Personal Information
    enteredCountry: "country that you migrated to",
    nativeCountry: "country that you came from",
    bornYear: "Year of Birth",
    
    // Reason for Leaving
    reasonOfLeaving: {
        education: {
            type: "education",
            collegeCenter: "centre"
        },
        work: {
            type: "work",
            place: "job location",
            jobId: "job identifier",
            jobRole: "job role description"
        }
    },
    
    // Professional Background
    workSettings: {
        ethicalBackgrounds: [],
        ioStatistics: {
            countryWeb: [],
            gccData: []
        }
    },
    
    // Migration Details
    migrationInfo: {
        connectPipeline: ["Abroad", "jv_pipeline"],
        siblingStatus: "remaining_last",
        relationsLostDuringMigration: "Relations lost while travelling",
        transport: {
            wheel: true,
            safe: true,
            livingSpace: "applicable"
        }
    },
    
    // Residency Status
    permanentResidency: {
        status: "On-call",
        dataView: "past social history",
        socialHistory: {}
    },
    
    // Terminal and Connection Information
    terminalConnection: {
        regularStand: "standard",
        localConnection: true,
        preferredLivingStand: "Cafe",
        newSpace: "designated area"
    },
    
    // Additional Information
    countryRegimen: {
        spoken: true,
        content: "privacy protected"
    }
};

/**
 * Populate migration data with user input
 * @param {Object} userData - User provided data
 * @returns {Object} Updated migration data
 */
function populateMigrationData(userData) {
    return Object.assign({}, MigrationData, userData);
}

/**
 * Validate migration data
 * @param {Object} data - Data to validate
 * @returns {Boolean} True if valid
 */
function validateMigrationData(data) {
    const requiredFields = ['enteredCountry', 'nativeCountry', 'bornYear'];
    return requiredFields.every(field => field in data && data[field] !== "");
}

// Export for use in HTML
window.MigrationData = MigrationData;
window.populateMigrationData = populateMigrationData;
window.validateMigrationData = validateMigrationData;
