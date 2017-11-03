export class Person {
    message: string;
    data: {
        // common for mother; father; staff and student
        type: String;
        password: String;
        code: String;
        first_name: String;
        middle_name: String;
        last_name: String;
        dob: Date;
        gender: String;
        nationality: String;
        current_address: String;
        contact_number: String;
        email: String;
        city: String;
        pincode: String;
        remarks: String;
        id_proofs: [{
            name: String;
            code: String
        }];

        created_by: String;
        updated_by: String;

        // staff
        manager: String;
        job_roll: String;
        job_category: String;
        designation: String;
        department: String;
        joining_date: Date;

        // student only
        living_with: String;
        single_parent: Number;
        employee_ward: Number;
        mother_tounge: String;
        sibilings: [String];
        father_profession: {
            profile: String;
            designation: String;
            organisation: String;
            address: String
        };
        mother_profession: {
            profile: String;
            designation: String;
            organisation: String;
            address: String
        };
        previous_institutes: [{
            name: String;
            registration_num: String;
            classes_attended: [String];
            from: Date;
            to: Date;
            Board: String;
            MarksObtained: Number
        }];
        status: String
    }
}