'''
split the questions into multiple smaller surveys, what should the categories be?
'''

import time

def survey():
    questions = {
        'gender': ("Which of the following best describes your gender?", 
                   ["man", "woman", "other"]),
        # 'age': ("Which age group do you belong to?", 
        #         ["<20", "30-39", "40-49", "50-59", ">60"]),
        # 'background': ("How would you describe your ethnic or cultural background?", 
        #                ["North American Aboriginal", "Other North American", "European"]),
        # 'citizenship': ("What is your citizenship or immigration status?", 
        #                 ["Canadian Citizen", "Permanent Resident", "Visitor"]),
        # 'education': ("What is the highest level of education you have completed?", 
        #               ["No degree certification or diploma", "Completed highschool", "some college/university"]),
        # 'employment_status': ("What is your current employment status?", 
        #                       ["currently working", "student", "volunteer"]),
        # 'occupation': ("What is your current job or occupation?", None),  # Open-ended question
        # 'hours_worked': ("How many hours per week do you usually work, including all paid work and unpaid overtime?", None),  # Open-ended question
        # 'transportation': ("What is your primary mode of transportation to get to work?", 
        #                    ["Walk", "Bicycle", "Public Transit"]),
        # 'commuting_time': ("On average, how much total time do you spend commuting to and from work each day?", 
        #                    ["<15 min", "15 to 29 min", "30 to 44 min"]),
        # 'work_benefits': ("Do you or your spouse/partner receive any of the following benefits through your or their job(s)?", 
        #                   ["Dental plan", "paid parental leave", "pension plan"]),
        # 'income': ("income temp", 
        #            ["temp"]),
        # 'loan_status': ("loan temp", 
        #            ["temp"]),
        # 'smoking': ("smoking temp", 
        #            ["temp"]),
    }

    responses = {'date': (time.strftime('%x'))}

    for key, (question, valid_options) in questions.items():
        while True:
            response = input(question + ' (' + ', '.join(valid_options) + ')' + ' ').strip().lower()
            if valid_options is None or response in valid_options:
                responses[key] = response
                break
            else:
                print(f"Invalid response. Please choose from the following options: {', '.join(valid_options)}")

    return responses

def save_responses(responses, filename="baseline_responses.txt"):
    with open(filename, 'a') as file:
        file.write(str(responses) + '\n')

def main():
    print("Welcome to the survey!")
    responses = survey()

    # Save responses to file
    save_responses(responses)

    print("\nThank you for participating! Here are your responses:")
    for key, response in responses.items():
        print(f"{key}: {response}")

if __name__ == "__main__":
    main()