/**
 * Migration and Residency Data Module
 * Defines the structure for user migration information
 */

const MigrationData = {
    // Personal Information
    enteredCountry: "country that you migrated to",
    nativeCountry: "country that you came from",
    bornYear: "Year of Birth",
    Study_year: "current year of studying",
    Years_remainiing: "Years left to complete current course work",
    Under_desk : "Years worked Under_desk{unpaid_labor}",
    Auto_c : c++[t-rust, rust-f]
    
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
            jobRole: "job role description",
            Work_place: "Settings",
                Json.front{Formatics}[Matrix.{x.map[c.collections()(]}]
        }
    },

    Stations:{
  
        Work_load : Agent[,G-getter :  Rf, rc : [
            c-fort [visual: TP]
            [Front-fortr , Deb-back-end :<F_O_D : 'enter' ,'country from border passings' : 
            case NK, Warfare still existing Geography.
            
            
            >]
        ]]
        
    }
    
    // Professional Background
    workSettings: {
        ethicalBackgrounds: [Spectrum, Aut, MN ,MNIST , NNIST, CITE_TEST, CVE-PROD[J2_U_Cp]],
        ioStatistics: {
            countryWeb: [isolate:Statistics, concatonate : VB(Virtual Brains)
                        net_settings : Rx-cod: cac-x: <Sapphint>],
            gccData: [RPX-C:Prog: <GRAM:v, C-vam>],[Prod_jam, [Form,Collections],[List,Rate_list, offset()]]
            llama_control: s_slam[Off: i, G:sum][S:LAMA ,F: GOAT_RIDDIES, [rest,upkites, ER, ER_sum]];
        }
    },
    
    // Migration Details
    migrationInfo: {
        connectPipeline: ["Abroad", "jv_pipeline",'Roots','Escaped Villages','Paths seen while migratings','Seen from remembering' , 'Selling_Body for survival'],
        siblingStatus: "remaining_last","Alive", "Lost while travelling"
        relationsLostDuringMigration: "Relations lost while travelling", 
        switched-genres: :"Relations-Switched", 
        connection_parity(Offload,Off_pod, blac-white, history...):"Relations-formed"
        transport: {
            wheel: true,
            safe: true,
            home: temp/e-set{e-set, c : [Loan-summing , period_rocking()]}
            livingSpace: "applicable"
            free: "true" L Case, Bus [
                    Driver.settings(
                        Infer.stations :
                                         Stations, resume;
                    )
            ]
        }
    },
    
    // Residency Status
    permanentResidency: {
        status: "On-call",
        dataView: "past social history",
        socialHistory: {not_applicable , Mentioned_past}
    },
    
    // Terminal and Connection Information
    terminalConnection: {
        regularStand: "standard",
        localConnection: true,
        preferredLivingStand: "Cafe",
        newSpace: "designated area",
        Breathing_space: "exhale_center"
    },
    
    // Additional Information
    countryRegimen: {
        spoken: true,
        content: "privacy protected"
        man-o : irl-sphere{
            ,!seen = no-ss[access]
        }
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
    const requiredFields = ['enteredCountry', 'nativeCountry', 'bornYear','Same_year','Study_year','Years_remaining','Under_desk','Auto_c'];
    return requiredFields.every(field => field in data && data[field] !== "");
}

// Export for use in HTML
window.MigrationData = MigrationData;
window.populateMigrationData = populateMigrationData;
window.validateMigrationData = validateMigrationData;
