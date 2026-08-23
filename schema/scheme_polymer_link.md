# Scheme-Polymer: Cross-Repository Linking Layer
## HillPlateau_terminal ↔ pay-none Integration

### Overview: Scheme-Polymer Architecture

**Purpose**: Transparent reflection-based linking between repositories without delist/potency-marker contamination.

```
Scheme-Polymer {
  place: de-liesting
    ├─ In-place: No relocation of reference data
    └─ De-listing: Prevents public enumeration of active potency markers
  
  medium: glass | fiber
    ├─ glass: Transparent (full reflection enabled)
    └─ fiber: Opaque (selective reflection, reflection-on-demand)
  
  reflection_needed: BOOLEAN
    ├─ If TRUE: Glass medium (full transparency)
    └─ If FALSE: Fiber medium (no delist, potency-marker untouched)
  
  left_cleared: BOOLEAN
    ├─ Audit trail cleared on reader side
    └─ Potency-marker remains on source (untouched)
}
```

### Cross-Repo Linking Schema

```
HillPlateau_terminal/schema/
├── logging_persistence.md
├── log_schema.json
├── disprover_logic.c
├── session_alternatives.js
├── authority_claims.log
└── scheme_polymer_link.md (THIS FILE)
     └─ References: ↓

pay-none/src/
├── NTS_registry.ts           # Name/Type/State search
├── scheme_resolver.ts        # scheme_resolve (tendrils→helsprings)
├── access_control.ts         # TAP:BUCKET gating
├── coppa_compliance.ts       # Privacy stamping (COPPA-Act governance)
├── evidence_classifier.ts    # cite-typed (EE/EI) classification
└── scheme_polymer.ts         # ← THIS FILE: Linking implementation
```

### Potency-Marker Protocol

**Definition**: Potency-marker = Active authority claim identifier used in disprover resolution

```
Marker State Machine:
┌─────────────────────────────────────────────────┐
│ POTENCY-MARKER LIFECYCLE                        │
├─────────────────────────────────────────────────┤
│                                                  │
│ [CREATED]                                        │
│   └─ Authority issues state_claim               │
│   └─ Potency-marker = unique_id(authority, ts)  │
│                                                  │
│ [ACTIVE] ← Glass medium (reflection enabled)    │
│   └─ Disprover evaluation in progress           │
│   └─ Visibility: HillPlateau → pay-none via     │
│      scheme-polymer (transparent)               │
│                                                  │
│ [LOCKED] ← Fiber medium (reflection conditional)│
│   └─ Escape clause applied OR contested         │
│   └─ Visibility: De-listed (not enumerable)     │
│   └─ Access: Only by direct reference_id        │
│                                                  │
│ [RESOLVED]                                       │
│   └─ Disprover reached canonical state          │
│   └─ Potency-marker LEFT_CLEARED                │
│   └─ Source marker: UNTOUCHED (audit trail)     │
│   └─ Reader marker: CLEARED (left_cleared=TRUE) │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Glass vs Fiber: Medium Selection

#### Glass Medium (Full Reflection)
```typescript
// HillPlateau_terminal → pay-none
// Use when: reflection_needed = TRUE

interface GlassLink {
  reflection_mode: 'TRANSPARENT',
  potency_marker_visible: true,
  query_capability: 'enumerate' | 'search' | 'stream',
  delist_protection: false,
  access_pattern: 'public'
}

// Example: Real-time multi-authority observation (ioning)
// All authority claims visible → Disprover can evaluate conflicts
```

#### Fiber Medium (Selective Reflection)
```typescript
// HillPlateau_terminal ↔ pay-none
// Use when: reflection_needed = FALSE (default)

interface FiberLink {
  reflection_mode: 'OPAQUE',
  potency_marker_visible: false,
  query_capability: 'direct_reference_only',
  delist_protection: true,
  access_pattern: 'private'
}

// Example: Contested/locked claims
// Potency-markers de-listed from registry
// No one can enumerate them without reference_id
```

### De-Listing Protocol

**When escape clause applied or claim contested:**

```
1. Potency-marker transitions to LOCKED state
2. Fiber medium activated (selective reflection)
3. De-listing occurs:
   ├─ Remove from NTS_registry enumeration
   ├─ Remove from authority_claims.log search results
   ├─ Accessible ONLY by direct session_id reference
   └─ Query: SELECT * FROM claims WHERE id = 'uuid' (direct)
      NOT:   SELECT * FROM claims (enumeration)

4. Potency-marker potency unchanged:
   ├─ Source (HillPlateau) retains full audit trail
   ├─ Marker not modified, not deleted
   ├─ Remains queryable by authorized components
   └─ Prevents accidental re-listing via stale cache
```

### Left-Cleared Protocol

**After disprover resolution:**

```
SOURCE SIDE (HillPlateau_terminal):
  ├─ logic_entry recorded
  ├─ escape_clauses_applied documented
  ├─ resolved_citizenship stamped
  └─ potency_marker: UNTOUCHED (audit immutable)

READER SIDE (pay-none):
  ├─ Resolution cached
  ├─ Session marked: resolved = true
  ├─ Potency-marker reference cleared from memory
  └─ left_cleared = true (audit trail severed on reader)

RESULT:
  → No bidirectional audit linkage
  → Source maintains truth, reader maintains autonomy
  → Privacy boundary respected
```

### In-Place De-Listing Implementation

**No relocation, No data movement:**

```sql
-- HillPlateau_terminal: authority_claims table
CREATE TABLE authority_claims (
  id UUID PRIMARY KEY,
  authority_id VARCHAR,
  state_claim VARCHAR,
  potency_marker VARCHAR UNIQUE,
  status ENUM('ACTIVE', 'LOCKED', 'RESOLVED'),
  delist_flag BOOLEAN DEFAULT FALSE,
  reflection_medium ENUM('glass', 'fiber'),
  ...
);

-- De-listing (in-place):
UPDATE authority_claims
SET 
  delist_flag = TRUE,
  reflection_medium = 'fiber',
  status = 'LOCKED'
WHERE potency_marker = 'marker-uuid'
  AND escape_clauses_applied = TRUE;

-- Query behavior changes via VIEW:
CREATE VIEW public_claims AS
SELECT * FROM authority_claims
WHERE delist_flag = FALSE
  AND reflection_medium = 'glass';

-- pay-none can still access if it has session_id:
SELECT * FROM authority_claims
WHERE id = 'session-uuid'
  AND potency_marker = reference_id; -- Direct access
```

### Scheme-Polymer Registry

**Cross-repo linking metadata:**

```json
{
  "scheme_polymer_registry": [
    {
      "link_id": "sp-001",
      "source_repo": "MONASTERY-DENUMERATIONS/HillPlateau_terminal",
      "source_table": "authority_claims",
      "target_repo": "aromal-a/pay-none",
      "target_module": "scheme_resolver.ts",
      
      "medium": "glass",
      "reflection_enabled": true,
      "delist_protected": false,
      
      "potency_markers": [
        {
          "marker_id": "pm-entity-12345-auth-A",
          "status": "ACTIVE",
          "delist_flag": false,
          "reflection_medium": "glass"
        },
        {
          "marker_id": "pm-entity-12345-auth-C",
          "status": "LOCKED",
          "delist_flag": true,
          "reflection_medium": "fiber",
          "reason": "escape_clause_applied",
          "left_cleared": true
        }
      ],
      
      "query_endpoints": [
        {
          "path": "/api/claims/search",
          "medium": "glass",
          "auth": "optional"
        },
        {
          "path": "/api/claims/direct",
          "medium": "fiber",
          "auth": "required",
          "requires": "session_id"
        }
      ]
    }
  ]
}
```

### Usage: pay-none Integration

```typescript
// pay-none/src/scheme_polymer.ts

import { SchemePolymer } from './types';

class PolymerLink {
  private medium: 'glass' | 'fiber' = 'fiber';
  private delistProtected = true;
  private leftCleared = false;

  /**
   * Query HillPlateau logging via scheme-polymer
   * Respects potency-marker lifecycle
   */
  async queryAuthorityClaims(entityId: string, reflection_needed?: boolean) {
    // Select medium based on reflection need
    if (reflection_needed === true) {
      this.medium = 'glass';
    }

    const endpoint = this.medium === 'glass' 
      ? '/api/claims/search'  // Enumerable
      : '/api/claims/direct'; // Direct reference only

    const response = await fetch(
      `https://github.com/MONASTERY-DENUMERATIONS/HillPlateau_terminal${endpoint}`,
      {
        method: 'POST',
        body: JSON.stringify({
          entity_id: entityId,
          reflection_medium: this.medium,
          delist_protected: this.delistProtected
        })
      }
    );

    const claims = await response.json();
    
    // Process claims with disprover logic
    const resolved = this.resolveWithDisprover(claims);
    
    // Mark as left_cleared after processing
    this.leftCleared = true;
    
    return resolved;
  }
}
```

### COPPA-Act Compliance

**Potency-markers contain sensitive authority information:**

```typescript
// coppa_compliance.ts
// Stamp_mist: Metadata obfuscation layer

interface StampMist {
  cover: 'eyes' | 'cloth',  // Conceal potency-marker identity
  privacy_level: 'public' | 'private' | 'redacted',
  
  // Glass medium: minimal stamping
  // Fiber medium: aggressive stamping
}

// When delist_protected = true (fiber):
// potency_marker is "moist" (concealed) - not plaintext in transit
```

### Slack Change Acquisition

**Channel: Asynchrounous state synchronization**

```
HillPlateau (Source of Truth)
        ↓
   [logging-persistence-schema]
        ↓
   [scheme_polymer_link]
        ↓
pay-none (Consumer)
   [privacy-governance branch]
        ↓
   [SLACK ACQUIRED] ← Changes batched & queued
        ↓
   [Catch-up sync on next poll]
```

## Summary

**Scheme-Polymer enables:**

✅ In-place de-listing (no data movement)  
✅ Dual-medium reflection (glass/fiber)  
✅ Potency-marker protection (left untouched on source)  
✅ Reader autonomy (left_cleared audit severance)  
✅ COPPA compliance (privacy stamping via stamp_mist)  
✅ Cross-repo linking without contamination  
