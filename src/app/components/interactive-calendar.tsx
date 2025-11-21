"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"
import CalendarModal from "./calendar-modal"
import weeklyEventsData from "@/app/api/utils/events.json"

interface Event {
    date: string
    title: string
    time: string
    location: string
    description: string
    type: "evento" | "campanha"
    data_fim?: string
}

interface WeeklyEvent {
    id: number
    title: string
    description: string
    time_start: string
    time_end: string | null
    location: string
    category: string
    dia_semana: string
}

const dayOfWeekMap: { [key: string]: number } = {
    "Domingo": 0,
    "Segunda-feira": 1,
    "Terça-feira": 2,
    "Quarta-feira": 3,
    "Quinta-feira": 4,
    "Sexta-feira": 5,
    "Sábado": 6
}

const InteractiveCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const getAllEvents = (): Event[] => {
        return []
    }

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    }

    const getEventsForDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-')
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
        const dayOfWeek = date.getDay()

        const weeklyEvents = (weeklyEventsData as WeeklyEvent[])
            .filter(event => dayOfWeekMap[event.dia_semana] === dayOfWeek)
            .map(event => ({
                date: dateString,
                title: event.title,
                time: event.time_end ? `${event.time_start} - ${event.time_end}` : event.time_start,
                location: event.location,
                description: event.description,
                type: "evento" as const
            }))

        return weeklyEvents
    }

    const isToday = (day: number) => {
        const today = new Date()
        return (
            today.getDate() === day &&
            today.getMonth() === currentDate.getMonth() &&
            today.getFullYear() === currentDate.getFullYear()
        )
    }

    const handleDateClick = (day: number) => {
        const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
        setSelectedDate(dateString)
        setIsModalOpen(true)
    }

    const navigateMonth = (direction: "prev" | "next") => {
        setCurrentDate((prev) => {
            const newDate = new Date(prev)
            if (direction === "prev") {
                newDate.setMonth(prev.getMonth() - 1)
            } else {
                newDate.setMonth(prev.getMonth() + 1)
            }
            return newDate
        })
    }

    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
    ]

    const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

    return (
        <div className="bg-card rounded-xl p-3 sm:p-5 shadow-lg border border-border/50 w-full max-w-6xl mx-auto">

            {/* Header do calendário */}
            <div className="flex items-center justify-between mb-3 sm:mb-5">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigateMonth("prev")}
                    className="hover:bg-primary/10 text-primary h-8 w-8 sm:h-9 sm:w-9"
                >
                    <ChevronLeft className="w-4 h-4" />
                </Button>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-primary">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigateMonth("next")}
                    className="hover:bg-primary/10 text-primary h-8 w-8 sm:h-9 sm:w-9"
                >
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>

            {/* Dias da semana */}
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1.5 mb-2 sm:mb-3">
                {dayNames.map((day) => (
                    <div
                        key={day}
                        className="text-center sm:text-left text-xs sm:text-sm font-medium text-muted-foreground px-1 sm:px-4 py-1 sm:py-1.5 border-b border-border/20"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Dias do mês */}
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                {emptyDays.map((day) => (
                    <div key={`empty-${day}`} className="aspect-square sm:aspect-[2/1]"></div>
                ))}
                {days.map((day) => {
                    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                    const dayEvents = getEventsForDate(dateString)
                    const hasEvents = dayEvents.length > 0

                    return (
                        <div
                            key={day}
                            className={`aspect-square sm:aspect-[2/1] border rounded-md sm:rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 flex flex-col ${
                                isToday(day)
                                    ? "bg-green-200 border-green-300 hover:bg-green-300 font-semibold"
                                    : hasEvents
                                        ? "border-border/20 bg-gradient-to-br from-secondary/10 to-accent/5 hover:bg-muted/30 hover:border-primary/50"
                                        : "border-border/20 bg-background hover:bg-muted/30 hover:border-primary/50"
                            }`}
                            onClick={() => handleDateClick(day)}
                        >
                            <div className="p-0.5 sm:p-1.5 h-full flex flex-col">
                                <div className={`text-xs sm:text-sm font-medium mb-0.5 sm:mb-1 ${isToday(day) ? "text-gray-900" : "text-gray-900"}`}>
                                    {day}
                                </div>

                                {/* Eventos resumidos - esconde no mobile, mostra no sm+ */}
                                <div className="hidden sm:flex flex-1 flex-col space-y-0.5 overflow-hidden">
                                    {dayEvents.slice(0, 2).map((event, index) => (
                                        <div
                                            key={index}
                                            className={`text-[8px] md:text-[9px] px-0.5 md:px-1 py-0.5 rounded truncate leading-tight font-medium ${
                                                isToday(day) ? "bg-white text-green-800" : "bg-green-600 text-white"
                                            }`}
                                            title={`${event.time} - ${event.title}`}
                                        >
                                            <span className="text-[8px] md:text-[10px]">{event.title.substring(0, 8)}...</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Legenda compacta */}
            <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-border/30">
                <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 bg-green-300 ring-2 ring-primary/30 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Hoje</span>
                </div>
            </div>

            {/* Modal de eventos */}
            <CalendarModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                date={selectedDate || ""}
                events={selectedDate ? getEventsForDate(selectedDate) : []}
            />
        </div>
    )
}

export default InteractiveCalendar