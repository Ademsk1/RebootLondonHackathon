import matplotlib.pyplot as plt
import csv


def get_bpm(i, file_name):
    x = {}
    y = {}

    if i not in x:
        x[i] = []

    if i not in y:
        y[i] = []

    with open(f'data/{file_name}.csv','r') as csvfile:
        lines = csv.reader(csvfile, delimiter=',')
        next(lines, None)
        current_date = "1-Mar-2025"
        total = 0
        for row in lines:
            if row[0] != current_date:
                x[i].append(current_date)
                y[i].append(total)
                current_date = row[0]
                total = 0
            else:
                total += float(row[12])

    return x, y

def main():
    files = [
        '1_liwei_control_health_conscious_young_adult',
        '2_samira_young_adult_mild_anxiety',
        '3_javier_gen_z_student_academic_financial_stress',
        '4_aisha_young_adult_sleep_issues_low_activity',
        '5_kofi_young_professional_experiencing_burnout',
        '6_ahmed_night_shift_worker_circadian_disruption'
    ]

    for i, file_name in enumerate(files):
        x, y = get_bpm(i, file_name)

        plt.figure(i)
        plt.plot(x[i], y[i], color = 'g', linestyle = 'dashed',
            marker = 'o',)

        plt.xticks(rotation = 25)
        plt.xlabel('Date')
        plt.ylabel('Sleep Duration')
        plt.title(f'Sleep Duration ({file_name})', fontsize = 20)
        plt.grid()
        plt.legend()
    
    plt.show()


if __name__ == "__main__":
    main()