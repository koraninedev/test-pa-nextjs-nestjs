"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guild = exports.interests = exports.skill = exports.experience = exports.education = exports.contact = exports.user = void 0;
const user_1 = require("./user");
Object.defineProperty(exports, "user", { enumerable: true, get: function () { return user_1.user; } });
const contact_1 = require("./contact");
Object.defineProperty(exports, "contact", { enumerable: true, get: function () { return contact_1.contact; } });
const education_1 = require("./education");
Object.defineProperty(exports, "education", { enumerable: true, get: function () { return education_1.education; } });
const experience_1 = require("./experience");
Object.defineProperty(exports, "experience", { enumerable: true, get: function () { return experience_1.experience; } });
const skill_1 = require("./skill");
Object.defineProperty(exports, "skill", { enumerable: true, get: function () { return skill_1.skill; } });
const interests_1 = require("./interests");
Object.defineProperty(exports, "interests", { enumerable: true, get: function () { return interests_1.interests; } });
const guild_1 = require("./guild");
Object.defineProperty(exports, "guild", { enumerable: true, get: function () { return guild_1.guild; } });
const entities = [user_1.user, contact_1.contact, education_1.education, experience_1.experience, skill_1.skill, interests_1.interests, guild_1.guild];
exports.default = entities;
//# sourceMappingURL=index.js.map